import { Dimensions, StyleSheet } from "react-native";
import { BaseColor } from "../../config";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  mainConatiner: { flex: 1, backgroundColor: BaseColor.blackColor },
  container: { flex: 1, backgroundColor: "#191919" },
  imageContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 4,
  },
  imageStyle: {
    width: 116,
    height: 116,
    borderRadius: 70,
    borderColor: BaseColor.lightPrimaryColor,
    borderWidth: 1,
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    alignItems: "center",
    color: BaseColor.fieldColor,
    fontFamily: "Proxima Nova Semibold",
    fontSize: 25,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 14,
  },
  ratingText: { paddingLeft: 5, color: BaseColor.fieldColor },
  followingContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 4,
  },
  followerText: { color: "#858585" },
  followingText: { paddingLeft: 50, color: "#858585" },
  numbersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 14,
  },
  followerNumberContainer: {
    width: "50%",
    alignItems: "center",
    paddingLeft: 90,
  },
  followerNumberText: { color: BaseColor.fieldColor },
  followingNumberContainer: {
    width: "50%",
    alignItems: "center",
    paddingRight: 145,
  },
  followingNumberText: { color: BaseColor.fieldColor, paddingLeft: 50 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    height: 59,
    width: 255,
    overflow: "hidden",
    borderColor: "#00FFE5",
    borderWidth: 1,
  },
  listContainer: {
    marginTop: 15,
    backgroundColor: "#000000",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  listFirstHeading: {
    fontFamily: "Proxima Nova Semibold",
    fontSize: 25,
    color: BaseColor.fieldColor,
    paddingLeft: 41,
    paddingTop: 35,
  },
  ListHeading: {
    fontFamily: "Proxima Nova Semibold",
    fontSize: 25,
    color: BaseColor.fieldColor,
    paddingLeft: 41,
    paddingTop: 49.5,
  },
});
