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
			width: "90%",
			alignItems: "center",
			alignSelf: "center",
			marginTop: 0,
			// height: height,
		},
		detailContainer: {
			height: 120,
			backgroundColor: BaseColor.backgroundColor,
		},
		multilineDetailContainer: {
			height: 230,
			backgroundColor: BaseColor.backgroundColor,
		},
		title: {
			color: BaseColor.textColor,
			fontSize: 20,
			fontWeight: "bold",
			marginBottom: 10,
		},
		textInput: {
			height: 51,
			backgroundColor: BaseColor.fieldColor,
			borderRadius: 10,
			borderWidth: 1,

			// marginBottom: 10,
			width: "100%",
		},
		multilineTextInput: {
			height: 100,
			backgroundColor: BaseColor.fieldColor,
			borderRadius: 10,
			borderWidth: 0.5,
			// marginBottom: 10,
			width: "100%",
		},

		nextButton: {
			width: "100%",
			borderRadius: 14,
			// height: 60,
			alignSelf: "center",
			position: "absolute",
			bottom: 15,
			justifyContent: "center",
			marginTop: 0,
			paddingTop: 0,
		},
	});

	return styles;
};
