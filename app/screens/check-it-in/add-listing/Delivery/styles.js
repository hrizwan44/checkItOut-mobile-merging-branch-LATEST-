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
			width: "90%",
			alignItems: "center",
			alignSelf: "center",
			marginTop: 0,
			height: height - headerHeight,
			justifyContent: "space-between",
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
			borderWidth: 1,
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
		createButton: {
			// marginTop: 10,
			justifyContent: "center",
			borderRadius: 14,
			// height: 60,
			width: "100%",
			// position: 'absolute',
			bottom: 120,
		},
	});

	return styles;
};
