import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { BaseColor } from "../../../../config";

const { width, height } = Dimensions.get("window");
export default (isDarkMode) => {
	let theme;
	if (!isDarkMode) {
		theme = "Light";
	} else {
		theme = "Dark";
	}
	const styles = StyleSheet.create({
		container: {
			width: width,
			minHeight: height - 55,
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
		},
		contentContainer: {
			width: "100%",
			alignItems: "flex-start",
			justifyContent: "flex-start",
			padding: 25,
			marginTop: 20,
		},
		title: {
			fontSize: 22,
			color: BaseColor.primaryLightColor,
			fontWeight: "bold",
		},
		details: {
			marginTop: 22,
			color: theme == "Dark" ? "white" : "#000",

			// maxWidth: "100%"
		},
		feedBackContainer: {
			width: "100%",
			alignItems: "center",
			justifyContent: "center",
			marginTop: 20,
		},
		feedBackTitle: {
			color: theme == "Dark" ? "white" : "#000",
			fontSize: 16,
			fontWeight: "bold",
		},
		feedBackButtonContainer: {
			flexDirection: "row",
			marginTop: 5,
		},
		feedBackButton: {
			width: 75,
			height: 35,
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
			borderColor: BaseColor.primaryColor,
			borderWidth: 1,
			margin: 10,
		},
		feedBackButtonText: {
			fontSize: 11,
			color: theme == "Dark" ? "white" : "#000",
		},
	});
	return styles;
};
