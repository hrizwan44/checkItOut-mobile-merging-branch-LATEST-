import { Dimensions, StyleSheet } from "react-native";
import { BaseColor } from "../../../../../config";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  mainContainer: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  reportUserTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  noteContainer: {
    width: "90%",
    height: 200,
  },
  noteTitle: {
    fontSize: 14,
    color: "white",
  },

  blockTitle: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold"
  },
  noteTitleContainer:{

    width: "100%",
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,

  },
  blockTitleContainer:{

    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,

  },
  noteSubTitle: {
    fontSize: 12,
    color: "white",
  },
  blockSubTitle: {
    fontSize: 11,
    color: "white",
  },
  textInput: {
    height: 110,
    backgroundColor: BaseColor.fieldColor,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
  },
  blockContainer: {
    width: "90%",
    height: 110,
  },
  reportButton: {
    // marginTop: 10,
    width: "90%",
    justifyContent: "center",
    borderRadius: 10,
    height: 60,
    // position: 'absolute',
    // bottom: 0
  },
  bottomThreshold: {
    width: width,
    height: 50
  }
});
