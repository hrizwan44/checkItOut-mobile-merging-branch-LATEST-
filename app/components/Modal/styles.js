import { Dimensions, StyleSheet } from "react-native";
import { BaseColor } from "../../config";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#191919",
  },
  cardMainContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    borderBottomWidth: 2,
    backgroundColor: BaseColor.backgroundColor,
    height: 65,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0,
    elevation: 6,
  },
  cardContainer: {
    paddingTop: "5%",
    backgroundColor: "#191919",
    height: 210,
    width: "40%",
    marginTop: "8%",
    marginLeft: "7.5%",
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "5%",
  },
  cardSecondaryContainer: {
    backgroundColor: "#707070",
    height: 175,
    width: "100%",
    margin: 7,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  itemText: {
    position: "absolute",
    bottom: 6,
    color: BaseColor.fieldColor,
    fontFamily: "Proxima Nova",
    fontSize: 15,
  },
  cardTitle: {
    color: BaseColor.fieldColor,
    fontFamily: "Segoe UI",
    fontWeight: "900",
    fontSize: 18,
  },
  headerTitle: {
    color: BaseColor.fieldColor,
    textAlign: "center",
    fontFamily: "Proxima Nova Semibold",
    fontSize: 19,
  },
});
