import { Dimensions, StyleSheet } from "react-native";
import { LightThemeColors, DarkThemeColors } from "../../../../../config/color";
const { width, height } = Dimensions.get("window");
export default (isDarkMode) => {
	let BaseColor;
	if (!isDarkMode) {
		BaseColor = LightThemeColors;
	} else {
		BaseColor = DarkThemeColors;
	}
	const styles = StyleSheet.create({
		mainContainer: {
			width: width,
			alignItems: "center",
			justifyContent: "center",
			marginTop: 30,
		},
		dropDownContainer: {
			height: 180,
			width: "100%",
			marginTop: 20,
		},
		reportUserTitle: {
			color: isDarkMode ? "white" : "black",

			fontSize: 16,
			fontWeight: "bold",
		},
		noteContainer: {
			width: "90%",
			height: 100,
		},
		noteTitle: {
			fontSize: 12,
			color: isDarkMode ? "white" : "black",
		},
		noteSubTitle: {
			fontSize: 12,
			color: isDarkMode ? "white" : "black",
		},
		textInput: {
			height: 60,
			backgroundColor: BaseColor.fieldColor,
			borderRadius: 10,
			marginBottom: 10,
			width: "100%",
		},
		blockContainer: {
			width: "90%",
			height: 300,
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
			height: 50,
		},
		dropDownStyle: {
			borderWidth: 0,
			borderRadius: 0,
			backgroundColor: isDarkMode ? "#1D1D1D" : BaseColor.backgroundProfileList,
		},
		dropDownContainerStyle: {
			width: "100%",
			height: 185,
			backgroundColor: isDarkMode ? "#1D1D1D" : BaseColor.backgroundProfileList,
			borderWidth: 0,
			borderRadius: 0,
		},
		labelStyle: {
			color: isDarkMode ? "white" : "black",

			marginLeft: 20,
		},

		itemContainer: {
			width: "100%",
			flexDirection: "row",
			paddingTop: 5,
			paddingBottom: 5,
			borderTopColor: BaseColor.backgroundColor,
			borderTopWidth: 5,
			paddingLeft: 50,
			paddingRight: 15,
		},
		label: {
			color: isDarkMode ? "white" : "black",

			flex: 2,
			fontSize: 14,
		},
	});
	return styles;
};
