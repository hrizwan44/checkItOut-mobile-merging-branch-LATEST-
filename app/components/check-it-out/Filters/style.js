import { StyleSheet, Dimensions } from "react-native";
import { LightThemeColors, DarkThemeColors } from "../../../config/color";

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
		mainContainer: {
			paddingBottom: bottomContainerHeight - 15,
			backgroundColor: BaseColor.backgroundColor,
		},
		componentContainer1: {
			height: 100,
			paddingHorizontal: 20,
			width: "95%",
			zIndex: -1,
		},
		componentContainer: {
			height: 100,
			width: "95%",
			zIndex: -1,
		},
		title: {
			color: BaseColor.textColor,
			textAlign: "center",
			fontWeight: "bold",
			fontSize: 23,
			height: 30,
			marginBottom: 0,
		},
		markerTitle: {
			color: BaseColor.textColor,
			fontWeight: "bold",
			marginTop: 5,
		},
		componentTitle: {
			color: BaseColor.textColor,
			marginLeft: 13,
			marginBottom: 8,
			paddingTop: 0,
		},
		dropDownContainerStyle: {
			width: "100%",
			height: "auto",
			zIndex: 2000,
		},
		labelStyle: {
			color: "grey",
			marginLeft: 10,
		},
		toggleButtonContainer: {
			width: "95%",
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "center",
			alignItems: "center",
			marginTop: 50,
		},
		button: {
			width: "32%",
			height: 50,
			backgroundColor: "white",
			borderRadius: 10,
			margin: "0.5%",
			marginBottom: 8,
			alignItems: "center",
			justifyContent: "center",
			borderColor: "black",
			borderWidth: 1,
		},
		buttonActive: {
			width: "32%",
			height: 50,
			backgroundColor: "#3B897B",
			borderColor: "#6DF4E6",
			borderRadius: 8,
			// borderWidth: 1,
			margin: "0.5%",
			marginBottom: 8,
			alignItems: "center",
			justifyContent: "center",
		},
		buttonText: {
			color: "black",
			fontSize: 11,
		},
		buttonTextActive: {
			fontSize: 11,
			fontWeight: "bold",
		},
		rangeSliderContainer: {
			width: "100%",
			alignItems: "center",
			backgroundColor: "blue",
		},
		premiumButton: {
			justifyContent: "center",
			borderRadius: 10,
			height: 60,
			backgroundColor: "white",
			borderColor: BaseColor.primaryColor,
			borderWidth: 1,
			width: "95%",
			marginTop: 20,
		},
		premiumButtonText: {
			color: BaseColor.primaryColor,
			fontSize: 14,
		},
		clearFilterButton: {
			justifyContent: "center",
			borderRadius: 10,
			height: 60,
			backgroundColor: BaseColor.backgroundColor,
			borderColor: BaseColor.primaryColor,
			borderWidth: 1,
			width: "95%",
			marginTop: 20,
		},
		clearFilterButtonText: {
			color: BaseColor.textColor,
		},
		applyButton: {
			// marginTop: 10,
			justifyContent: "center",
			borderRadius: 10,
			height: 60,
			width: "95%",
			marginTop: 20,
			marginBottom: 20,
		},
		listContainer: {
			backgroundColor: null,
			width: width,
			paddingTop: 19,
			paddingLeft: 18,
			height: "100%",
		},
	});
	return styles;
};
