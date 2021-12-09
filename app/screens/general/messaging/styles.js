import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { BaseColor } from "../../../config";

const { width, height } = Dimensions.get("window");
import { LightThemeColors, DarkThemeColors } from "../../../config/color";
export default (isDarkMode) => {
	let BaseColorImp = BaseColor;
	if (!isDarkMode) {
		BaseColorImp = { ...BaseColorImp, ...LightThemeColors };
	} else {
		BaseColorImp = { ...BaseColorImp, ...DarkThemeColors };
	}
	const styles = StyleSheet.create({
		container: {
			flex: 1,

			alignItems: "center",
			justifyContent: "center",
			width: width,
			backgroundColor: BaseColorImp.backgroundColor,
		},
		title: {
			fontSize: 18,
			color: BaseColorImp.textColor,
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
			marginTop: 30,
			marginBottom: 4,
			flexDirection: "row",
			width: "100%",
		},
		imageStyle: {
			width: 62,
			height: 62,
			borderRadius: 1500,
		},
		username: {
			color: "#FFFFFF",
			fontSize: 19,
			marginLeft: 16,
		},
		productContainer: {
			width: "100%",
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
		header: {
			backgroundColor: BaseColorImp.headerBackgroundLight,
		},
		headerTitle: {
			// color: BaseColorImp.textColor,
			color: isDarkMode ? "white" : "black",
		},

		tab: { backgroundColor: BaseColorImp.backgroundColor },
	});
	return styles;
};

export const defaultStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: width,
		backgroundColor: BaseColor.backgroundColor,
	},
	title: {
		fontSize: 18,
		color: BaseColor.textColor,
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
		marginTop: 30,
		marginBottom: 4,
		flexDirection: "row",
		width: "100%",
	},
	imageStyle: {
		width: 62,
		height: 62,
		borderRadius: 1500,
	},
	username: {
		color: "#FFFFFF",
		fontSize: 19,
		marginLeft: 16,
	},
	productContainer: {
		width: "100%",
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
	header: {
		backgroundColor: BaseColor.headerBackgroundLight,
	},
	headerTitle: {
		color: BaseColor.textColor,
	},

	tab: { backgroundColor: BaseColor.backgroundColor },
});
