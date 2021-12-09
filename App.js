import React, { useEffect } from "react";
import { LogBox } from "react-native";
import FlashMessage from "react-native-flash-message";
import { PersistGate } from "redux-persist/integration/react";
import NavigationRoot from "./app/navigation";
import NavigationService from "./app/navigation/NavigationService";
import { persistor, store } from "./app/Redux/store";
import StringsOfLanguages from "./app/util/stringsOfLanguage";
import AuthProvider from "./app/context/authContext";
import Dashboard from "./app/screens/Dashboard";
import SignIn from "./app/screens/SignIn";
import SignUp from "./app/screens/SignUp";
import ThemeProvider from "./app/context/ThemeContext";
//const PREFIX = /http:\/\/www.checkitout.com\/\//;

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationRoot
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
            //uriPrefix={PREFIX}
            enableURLHandling={false}
          />
          <FlashMessage position="top" duration={4000} />
        </PersistGate>
      </AuthProvider>
    </ThemeProvider>
  );
};

// export default codePush(App);
export default App;
