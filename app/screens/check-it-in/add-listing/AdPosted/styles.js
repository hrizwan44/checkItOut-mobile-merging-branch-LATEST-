import { StyleSheet, Dimensions } from "react-native";
import { BaseColor } from "../../../../config";
import { DarkThemeColors, LightThemeColors } from "../../../../config/color";
const { width, height } = Dimensions.get("window");
const headerHeight = 60;
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
			width: "100%",
			alignItems: "center",
			alignSelf: "center",
			marginTop: 0,
			minHeight: height,
			backgroundColor: BaseColor.backgroundColor,
		},
		tabCurrent: {
			width: "25%",
			height: 1,
			backgroundColor: BaseColor.primaryLightColor,
			alignSelf: "flex-end",
		},
		detailContainer: {
			height: 120,
			borderRadius: 16,
			backgroundColor: BaseColor.backgroundColor,
		},
		multilineDetailContainer: {
			height: 230,
			backgroundColor: BaseColor.backgroundColor,
		},
		title: {
			color: "white",
			fontSize: 20,
			fontWeight: "bold",
			marginBottom: 10,
		},
		textInput: {
			height: 50,
			backgroundColor: BaseColor.fieldColor,
			borderRadius: 16,
			// marginBottom: 10,
			width: "100%",
		},
		multilineTextInput: {
			height: 100,
			backgroundColor: BaseColor.fieldColor,
			borderRadius: 10,
			// marginBottom: 10,
			width: "100%",
		},

		nextButton: {
			width: "100%",
			borderRadius: 10,
			// height: 60,
			alignSelf: "center",
			position: "absolute",
			bottom: 15,
			justifyContent: "center",
			marginTop: 0,
			paddingTop: 0,
		},
		greyButton: {
			// marginTop: 10,
			justifyContent: "center",
			borderRadius: 14,
			height: 44,
			width: "70%",
			backgroundColor: "#333333",
			marginTop: 14,
		},
		createButton: {
			// marginTop: 10,
			justifyContent: "center",
			borderRadius: 14,
			// height: 55,
			width: "86%",
			position: "absolute",
			bottom: 20,
		},
		title: {
			color: "white",
			fontSize: 19,
			marginTop: 24,
		},
		condition: {
			color: "#A9A8A9",
			fontSize: 14,
			marginBottom: 7,
		},
		thumbnail: {
			width: 216,
			height: 342,
			marginBottom: 4,
			borderColor: "#707070",
			borderWidth: 1,
		},
	});
	return styles;
};
