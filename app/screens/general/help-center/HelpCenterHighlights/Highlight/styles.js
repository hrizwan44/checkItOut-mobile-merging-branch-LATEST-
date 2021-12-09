import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { BaseColor } from "../../../../../config";

const { width, height } = Dimensions.get("window");
export default (isDarkMode) => {
	let theme;
	if (!isDarkMode) {
		theme = "Light";
	} else {
		theme = "Dark";
	}
	const styles = StyleSheet.create({
		categoryContainer: {
			width: "100%",
			minHeight: 40,
			backgroundColor:
				theme == "Dark" ? BaseColor.buttonSecondaryLightColor : "#F1F1F1",

			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			paddingRight: 30,
			paddingLeft: 30,
			paddingTop: 5,
			paddingBottom: 5,
			marginTop: 5,
		},
		title: {
			// fontSize: 16,
			maxWidth: "80%",
			color: theme == "Dark" ? "white" : "black",
		},
	});
	return styles;
};
