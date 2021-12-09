import { StyleSheet, Dimensions} from "react-native";
import { DarkThemeColors, LightThemeColors } from "../../../../config/color";
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
			backgroundColor: BaseColor.backgroundLight,
			paddingBottom: 20,
			minHeight: height - 200
		},
		imageContainer: {
			flex: 1,
			flexDirection: "row",
			paddingBottom: -5,
			marginBottom: -15,
			paddingTop: 17,
			justifyContent: "center",
		},
		headingContainer: {
			paddingLeft: 18,
			paddingRight: 18,
			flexDirection: "row",
			justifyContent: "space-between",
		},
		heading: {
			fontSize: 29,
			fontWeight: "bold",
			fontFamily: "Segoe UI",
			color: BaseColor.textColor,
		},
		textContainer: {
			paddingLeft: 18,
			paddingRight: 18,
			flexDirection: "row",
			justifyContent: "space-between",
		},
		text: {
			fontSize: 19,
			fontFamily: "Segoe UI",
			color: BaseColor.textColor,
			paddingBottom: 30,
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
	});

	return styles;
};
