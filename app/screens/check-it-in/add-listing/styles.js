import { Dimensions, StyleSheet } from "react-native";
import { LightThemeColors, DarkThemeColors } from "../../../config/color";
const { width, height } = Dimensions.get("window");
export default (isDarkMode) => {
  let BaseColor;
  if (!isDarkMode) {
    BaseColor = LightThemeColors;
  } else {
    BaseColor = DarkThemeColors;
  }
  const styles = StyleSheet.create({
      title: {
          color: BaseColor.textColor
      },
      header:{
          backgroundColor: BaseColor.backgroundColor
      },
      tab: { backgroundColor: BaseColor.backgroundColor }
  });
  return styles;
};
