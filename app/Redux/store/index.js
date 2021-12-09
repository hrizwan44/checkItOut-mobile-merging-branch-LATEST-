import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import authWatcher from "../saga/auth";;
import authReducer from "./reducers/auth";
function* rootSaga() {
  yield all([
    fork(authWatcher),
  ]);
}

const rootReducers = combineReducers({
  authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  // Root
  key: "root",
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["authReducer"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
  keyPrefix: "",
  timeout: 100000,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);
// Exports
export { store, persistor };
