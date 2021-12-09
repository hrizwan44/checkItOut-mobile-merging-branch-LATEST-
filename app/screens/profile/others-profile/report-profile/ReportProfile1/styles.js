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
		contain: {
			backgroundColor: isDarkMode ? BaseColor.backgroundColor : "white",
		},
		mainContainer: {
			backgroundColor: isDarkMode ? BaseColor.backgroundColor : "white",

			width: width,
			alignItems: "center",
			justifyContent: "center",
			marginTop: 30,
		},
		reportUserTitle: {
			color: isDarkMode ? "white" : "black",

			fontSize: 16,
			fontWeight: "bold",
		},
		noteContainer: {
			backgroundColor: isDarkMode ? BaseColor.backgroundColor : "white",

			width: "90%",
			height: 200,
		},
		noteTitle: {
			fontSize: 14,
			color: isDarkMode ? "white" : "black",
		},

		blockTitle: {
			fontSize: 14,
			color: isDarkMode ? "white" : "black",

			fontWeight: "bold",
		},
		noteTitleContainer: {
			width: "100%",
			flexDirection: "row",
			marginTop: 30,
			marginBottom: 30,
		},
		blockTitleContainer: {
			width: "100%",
			flexDirection: "row",
			marginTop: 20,
			marginBottom: 10,
		},
		noteSubTitle: {
			fontSize: 12,
			color: isDarkMode ? "white" : "black",
		},
		blockSubTitle: {
			fontSize: 11,
			color: isDarkMode ? "white" : "black",
		},
		textInput: {
			height: 110,
			borderWidth: 1,
			backgroundColor: isDarkMode ? BaseColor.backgroundColor : "white",

			borderRadius: 10,
			marginBottom: 10,
			width: "100%",
		},
		blockContainer: {
			width: "90%",
			height: 110,
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
	});
	return styles;
};
