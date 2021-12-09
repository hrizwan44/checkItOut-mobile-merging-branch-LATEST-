import { StyleSheet, Dimensions } from "react-native";
import { BaseStyle, PurpleColor, YellowColor } from "../../config";
import { LightThemeColors, DarkThemeColors } from "../../config/color";
const { width, height } = Dimensions.get("window");
const customHeaderContainerHeight = 119;
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
			height: height,
		},
		header: {
			width: width,
			height: 140,
			justifyContent: "center",
			alignContent: "center",
			alignItems: "center",
			backgroundColor: BaseColor.backgroundColor,
		},
		headerRow: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-evenly",
			width: "100%",
			margin: 5,
		},
		gridIcon: {
			width: "12%",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: BaseColor.primaryDarkColor,
			padding: "2%",
			borderRadius: 10,
		},
		gridIconActive: {
			width: "12%",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: BaseColor.primaryColor,
			padding: "2%",
			borderRadius: 10,
		},
		searchBar: {
			width: "70%",
			height: "90%",
			backgroundColor: BaseColor.backgroundColor,
			borderColor: "#6DF4E6",
			borderWidth: 1,
			borderRadius: 10,
			paddingLeft: "2.5%",
		},
		searchBarInput: {
			width: "85%",
			backgroundColor: BaseColor.backgroundColor,
			borderRadius: 10,
			fontSize: 22,
			color: "white",
		},
		filterIcon: {
			alignItems: "center",
			justifyContent: "center",
			borderColor: "#6DF4E6",
			borderWidth: 1,
			borderRadius: 10,
			padding: "1%",
			width: "10%",
			width: "11%",
		},
		filterIconActive: {
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: "#53BBAB",
			borderColor: "#6DF4E6",
			borderWidth: 1,
			borderRadius: 10,
			padding: "1%",
			width: "11%",
		},
		btn: {
			justifyContent: "center",
			borderRadius: 10,
			height: 50,
			width: "40%",
			fontSize: 10,
		},
		activeButtonText: {
			fontSize: 14,
			fontWeight: "bold",
		},
		inactiveButtonText: {
			color: "black",
			fontSize: 14,
		},
		text: {
			color: "#fff",
			fontSize: 17,
			marginRight: 15,
		},
		videoMainContainer: {
			height: "58%",
			flexDirection: "row",
			width: width,
			position: "absolute",
			bottom: 0,
		},
		innerLeft: {
			width: "80%",
			height: "100%",
		},
		innerRight: {
			width: "20%",
			height: "100%",
			alignItems: "center",
		},
		profile: {
			height: 50,
			width: 50,
			alignItems: "center",
			marginBottom: 25,
		},
		dataContainer: {
			width: "100%",
			position: "absolute",
			bottom: 0,
			padding: 5,
		},
		title: {
			fontWeight: "bold",
			color: "#fff",
		},
		description: {
			color: "#e5e5e5",
			marginBottom: 10,
		},
		sellerTitleContainer: {
			flexDirection: "row",
			alignItems: "center",
		},
		sellerTitle: {
			color: "#fff",
			fontSize: 16,
		},
		tagsContainer: {
			flexDirection: "row",
		},
		innerContainer: {
			// paddingBottom: 18,
			height: height - customHeaderContainerHeight - bottomContainerHeight,
		},
		categoriesContainer: {
			backgroundColor: BaseColor.backgroundColor,
			width: width,
			paddingTop: 19,
			paddingLeft: 18,
			height: "100%",
			paddingBottom: bottomContainerHeight - 25,
		},
		categoriesTitle: {
			color: BaseColor.textColor,
			textAlign: "center",
			fontWeight: "bold",
			fontSize: 23,
			height: 33,
			marginBottom: 6,
		},
		item: {
			color: BaseColor.textColor,
			fontSize: 17,
			marginBottom: 8,
		},
	});
	return styles;
};
