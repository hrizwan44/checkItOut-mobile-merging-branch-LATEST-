import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { LightThemeColors, DarkThemeColors } from "../../../config/color";

const { width, height } = Dimensions.get("window");
export default (isDarkMode) => {
	let BaseColor;
	if (!isDarkMode) {
		BaseColor = LightThemeColors;
	} else {
		BaseColor = DarkThemeColors;
	}
	const styles = StyleSheet.create({
		notificationsContainer: {
			width: width,
			marginTop: 20,
		},
		notificationContainer: {
			flexDirection: "row",
			justifyContent: "space-evenly",
			width: "100%",
			backgroundColor: isDarkMode ? "#242424" : DarkThemeColors.grayColor,
			height: 55,
			alignItems: "center",
			marginTop: 3,
		},
		image: {
			width: 36,
			height: 36,
		},
		text: {
			fontSize: 16,
			color: isDarkMode ? "#FFFFFF" : "black",
		},
		time: {
			color: isDarkMode ? "#FFFFFF" : "black",
			fontSize: 12,
		},
	});
	return styles;
};
