import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor, BaseStyle } from "../../../config";
import {
  DesignColor,
  LightThemeColors,
  DarkThemeColors,
} from "../../../config/color";

export default (isDarkMode) => {
  let BaseColorImp = BaseColor;
  if (!isDarkMode) {
    BaseColorImp = { ...BaseColorImp, ...LightThemeColors };
  } else {
    BaseColorImp = { ...BaseColorImp, ...DarkThemeColors };
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: BaseColorImp.backgroundColor,
      height: 60,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center", borderBottomWidth: 2,
      shadowColor: BaseColorImp.textColor,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      elevation: 6,
    },
    titlContainer: {
      flex: 2,
    },
    title: {
      color: BaseColorImp.textColor,
      fontSize: 16,
      flex: 2,
      textAlign: "center",
      fontWeight: "bold",
    },
    rightIcon: {
      paddingRight: "3%",
      alignItems: "flex-end",
      flex: 1,
    },
    leftIcon: {
      flex: 1,
      paddingLeft: "3%",
    },
  });
  return styles;
};
