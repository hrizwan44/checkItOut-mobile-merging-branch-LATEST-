import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { LightThemeColors, DarkThemeColors } from "../../../../config/color";

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
			flex: 1,
			alignItems: "center",
			backgroundColor: BaseColor.backgroundColor,
			// justifyContent: "center",
			width: width,
		},
		topBarContainer: {
			backgroundColor: BaseColor.backgroundColor,
			width: width,
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-evenly",
			marginTop: 25,
			marginBottom: 0,
		},
		messageText: {
			color: isDarkMode ? "white" : "black",
			fontSize: 15,
			// margin: 30,
		},
		messageTextBottom: {
			width: 67,
			height: 3,
			borderRadius: 2,
			marginBottom: 30,
			alignSelf: "flex-start",
			marginLeft: "20%",
		},
		notificationText: {
			color: "#757575",
			fontSize: 15,
		},
		chatContainer: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-evenly",
			backgroundColor: isDarkMode ? "#242424" : DarkThemeColors.grayColor,
			height: 100,
			marginBottom: 1,
		},
		dp: {
			width: 67,
			height: 67,
			borderRadius: 100,
		},
		dpContainer: {
			alignItems: "center",
			flex: 1.5,
		},
		textContainer: {
			alignItems: "flex-start",
			flex: 2,
		},
		timeContainer: {
			flex: 1,
			alignItems: "center",
		},
		title: {
			color: "#FFFFFF",
			fontSize: 21,
		},
		message: {
			color: "#FFFFFF",
			fontSize: 16,
		},
		time: {
			color: "#FFFFFF",
			fontSize: 14,
		},
	});
	return styles;
};
