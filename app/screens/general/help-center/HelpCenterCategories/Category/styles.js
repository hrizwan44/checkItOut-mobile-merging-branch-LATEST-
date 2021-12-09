import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
	BaseColor,
	LightThemeColors,
	DarkThemeColors,
} from "../../../../../config";

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
			width: "44%",
			minHeight: 91,
			backgroundColor:
				theme == "Dark" ? BaseColor.buttonSecondaryLightColor : "#F1F1F1",
			alignItems: "center",
			justifyContent: "center",
			borderRadius: 10,
			// borderWidth: 1,
			marginTop: 20,
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 12,
			},
			shadowOpacity: 2,
			shadowRadius: 16.0,

			elevation: 24,
			// margin: 5
		},
		title: {
			fontSize: 14,
			color: theme == "Dark" ? "white" : "black",
			fontWeight: "bold",
		},
	});
	return styles;
};
