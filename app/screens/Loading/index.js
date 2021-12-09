import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

import { retrieveData } from "../../util/helpers";

const Loading = (props) => {
  const onProcess = () => {
    retrieveData("userData")
      .then((data) => {
        console.log(data);
        props.navigation.navigate("Dashboard");
      })
      .catch((err) => props.navigation.navigate("AuthHome"));
  };

  useEffect(() => {
    SplashScreen.hide();
    onProcess();
  }, []);

  return null;
};

export default Loading;
