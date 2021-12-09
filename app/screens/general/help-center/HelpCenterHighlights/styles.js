import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { BaseColor } from "../../../../config";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    width: width,
    minHeight: height- 55,
    alignItems: 'center',
    backgroundColor: BaseColor.backgroundColor
  },
  title:{
      fontSize: 18,
    color: "white",
      fontWeight: 'bold'
  },
  categoriesContainer: {
    marginTop: 25,
    width: "100%",
    height: "100%"
    // justifyContent: "space-evenly",
  }
});
