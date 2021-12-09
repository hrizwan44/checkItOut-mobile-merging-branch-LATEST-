import { StyleSheet, Dimensions } from "react-native";
import { BaseColor, BaseStyle, PurpleColor, YellowColor } from "../../config";

const { width, height } = Dimensions.get("window");
const bottomContainerHeight = 55;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: BaseColor.backgroundColor,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 30,
  },
  title: {
    color: "white",
  },
  subTitle: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },
});

export default styles;
