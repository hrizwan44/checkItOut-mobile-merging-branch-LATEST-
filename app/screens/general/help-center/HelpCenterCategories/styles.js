import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { DarkThemeColors, LightThemeColors } from "../../../../config/color";

const { width, height } = Dimensions.get("window");
export default (isDarkMode) => {
	let BaseColor;
	if (!isDarkMode) {
		BaseColor = LightThemeColors;
	} else {
		BaseColor = DarkThemeColors;
	}
	const styles = StyleSheet.create({
		container: {
			width: width,
			alignItems: "center",
			backgroundColor: BaseColor.backgroundColor,
			minHeight: height,
		},
		title: {
			fontSize: 18,
			color: "white",
			fontWeight: "bold",
		},
		categoriesContainer: {
			flex: 1,
			width: "100%",
			flexWrap: "wrap",
			flexDirection: "row",
			justifyContent: "space-evenly",
			// paddingBottom: 60,
		},
	});

	return styles;
};
