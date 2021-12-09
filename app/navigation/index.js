import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Main from "./main";
import Loading from "../screens/Loading";
import Auth from "./auth";

const AppNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    Main: Main,
    Auth: Auth,
  },
  {
    initialRouteName: "Loading",
  }
);

export default createAppContainer(AppNavigator);
