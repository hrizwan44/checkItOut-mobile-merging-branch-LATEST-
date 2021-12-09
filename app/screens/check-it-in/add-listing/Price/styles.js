import { StyleSheet, Dimensions } from "react-native";
import { DarkThemeColors, LightThemeColors } from "../../../../config/color";

const { width, height } = Dimensions.get("window");
const bottomContainerHeight = 55;
export default (isDarkMode) => {
	let BaseColor;
	if (!isDarkMode) {
		BaseColor = LightThemeColors;
	} else {
		BaseColor = DarkThemeColors;
	}
	const styles = StyleSheet.create({
		container: {
			alignItems: "center",
			paddingBottom: 18,
			// justifyContent: "center",
			// minHeight: height - 62,
		},
		entityContainer: {
			width: "80%",
			backgroundColor: BaseColor.backgroundColor,
			marginBottom: 0,
		},
		title: {
			color: BaseColor.textColor,
			fontSize: 19,
			textAlign: "center",
			marginBottom: 9,
		},
		input: {
			width: "100%",
			height: 91,
			// borderColor: "#6DF4E6",
			borderWidth: 1,
			borderRadius: 10,
			paddingLeft: "2.5%",
		},
		inputText: {
			width: "100%",
			height: "100%",
			borderRadius: 10,
			fontSize: 40,
			color: "#191919",
			textAlign: "center",
		},
		createButton: {
			// marginTop: 10,
			justifyContent: "center",
			borderRadius: 14,
			// height: 60,
			width: "86%",
		},
		// sarts here

		blockTitle: {
			fontSize: 19,
			color: BaseColor.textColor,
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
			color: "white",
		},
		blockSubTitle: {
			fontSize: 11,
			color: "white",
		},
		textInput: {
			height: 110,
			backgroundColor: BaseColor.fieldColor,
			borderRadius: 10,
			marginBottom: 10,
			width: "100%",
		},
		blockContainer: {
			width: "80%",
			height: 110,
			marginTop: -30,
			backgroundColor: BaseColor.backgroundColor,
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
		titledContainer: {
			width: "100%",
			height: "100%",
			backgroundColor: BaseColor.backgroundColor,
		},
	});
	return styles;
};
