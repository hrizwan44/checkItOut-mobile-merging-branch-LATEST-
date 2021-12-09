import { StyleSheet, Dimensions } from "react-native";
import { DarkThemeColors, LightThemeColors } from "../../../config/color";
const { width, height } = Dimensions.get("window");
const customHeaderContainerHeight = 140;
const bottomContainerHeight = 68;
export default (isDarkMode) => {
	let BaseColor;
	if (!isDarkMode) {
		BaseColor = LightThemeColors;
	} else {
		BaseColor = DarkThemeColors;
	}
	const styles = StyleSheet.create({
		mainContainer: {
			paddingTop: 17,
			backgroundColor: BaseColor.backgroundColor,
		},
		mainContainerContentStyle: {
			alignItems: "center",
		},
		container: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		backgroundVideo: {
			width: 400,
			height: 200,
		},
		button: {
			backgroundColor: "green",
			height: 50,
			width: 100,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			color: "white",
			borderRadius: 10,
			margin: 10,
		},
		preview: {
			height: 180,
			width: 320,
			backgroundColor: "blue",
		},
		innerContainer: {
			paddingBottom: 18,
			height: height - customHeaderContainerHeight - bottomContainerHeight,
		},
	});

	return styles;
};
