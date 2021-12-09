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
			justifyContent: "center",
			width: width,
			backgroundColor: BaseColor.backgroundColor,
		},
		title: {
			fontSize: 18,
			color: "white",
			fontWeight: "bold",
		},
		categoriesContainer: {
			marginTop: 25,
			width: "100%",
			height: "100%",
			// justifyContent: "space-evenly",
		},
		sendButtonContainer: {},
		sendButton: {
			width: 53,
			height: 54,
			borderRadius: 16,
			marginBottom: 12,
			alignItems: "center",
			justifyContent: "center",
		},
		imageContainer: {
			alignItems: "center",
			alignSelf: "center",
			marginTop: 20,
			marginBottom: 4,
			flexDirection: "row",
			width: "86%",
		},
		imageStyle: {
			width: 62,
			height: 62,
			borderRadius: 1500,
		},
		username: {
			color: BaseColor.textColor,
			fontSize: 19,
			marginLeft: 16,
		},
		productContainer: {
			width: "86%",
			minHeight: 59,
			alignItems: "center",
			justifyContent: "space-evenly",
			backgroundColor: "#3A3A3A",
			alignSelf: "center",
			flexDirection: "row",
			borderRadius: 13,
			marginTop: 15,
			marginBottom: 22,
		},
		productImage: {
			width: 30,
			height: 46,
		},
		productInfoContainer: {},
		productTitle: { color: "#FFFFFF", fontSize: 15 },
		productDescription: { color: "#CCCCCC", fontSize: 12 },
		productPrice: { color: "#FFFFFF", fontSize: 11 },
		innerContainer: {
			backgroundColor: BaseColor.backgroundColor,
			flex: 1,
			paddingBottom: 24,
			width: "100%",
		},
	});

	return styles;
};
