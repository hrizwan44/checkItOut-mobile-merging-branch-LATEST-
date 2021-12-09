import { Dimensions, StyleSheet } from "react-native";
import { BaseColor } from "../../../../config";
const { width, height } = Dimensions.get("window");
const theme = "Light";
export default (isDarkMode) => {
  let theme;
  if (!isDarkMode) {
    theme = "Light";
  } else {
    theme = "Dark";
  }
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    cardMainContainer: {
      height: 233,
      width: 298,
      backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
      borderRadius: 15,
    },
    header: {
      borderBottomWidth: 2,
      backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
      height: 65,
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0,
      elevation: 6,
    },
    cardContainer: {
      flex: 1,
      display: "flex",
      padding: "10%",
      justifyContent: "center",
    },
    createButton: {
      borderRadius: 15,
    },
  });
  return styles;
};
