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
			height: height,
		},
		header: {
			paddingTop: 8,
			width: width,
			height: 125,
			// justifyContent: "center",
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
			borderColor: "#6DF4E6",
			borderWidth: isDarkMode ? 0 : 1,

			width: 38,
			height: 38,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: BaseColor.primaryDarkColor,
			padding: "2%",
			borderRadius: 5,
			marginBottom: "1%",
		},
		gridIconActive: {
			borderColor: "#6DF4E6",
			// borderWidth: 1,
			width: 38,
			height: 38,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: BaseColor.primaryColor,
			padding: "2%",
			borderRadius: 5,
			marginBottom: "1%",
		},
		searchBar: {
			width: "70%",
			height: "80%",
			// borderRadius: 50,
			backgroundColor: isDarkMode ? "#2C2A2A" : BaseColor.backgroundColor,

			// borderColor: "#6DF4E6",
			borderWidth: 0.5,
			borderRadius: 8,
			paddingLeft: "2.5%",
			textAlign: "center",
			marginBottom: "1%",
		},
		searchBarInput: {
			margin: 0,
			width: "80%",
			minHeight: 38,
			backgroundColor: isDarkMode ? "#2C2A2A" : BaseColor.backgroundColor,
			borderRadius: 10,
			fontSize: 19,
			color: BaseColor.textColor,
		},
		filterIcon: {
			alignItems: "center",
			justifyContent: "center",
			borderColor: "#6DF4E6",
			backgroundColor: BaseColor.primaryDarkColor,

			borderWidth: isDarkMode ? 0 : 1,
			borderRadius: 5,
			paddingTop: 4,
			paddingBottom: 4,
			width: 38,
			height: 38,
			marginBottom: "1%",
		},
		filterIconActive: {
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: isDarkMode ? "#53BBAB" : BaseColor.primaryColor,
			borderColor: "#6DF4E6",
			borderWidth: 1,
			borderRadius: 5,
			paddingTop: 4,
			paddingBottom: 4,
			width: 38,
			height: 38,
			marginBottom: "1%",
		},
		btn: {
			justifyContent: "center",
			borderRadius: 0,
			height: 50,
			width: "50%",
			fontSize: 10,
		},
		activeButtonText: {
			fontSize: 18,
			fontWeight: "bold",
		},
		inactiveButtonText: {
			color: "#FFFFFF33",
			fontSize: 18,
			fontWeight: "bold",
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
			height: height - customHeaderContainerHeight - bottomContainerHeight,
		},
	});
	return styles;
};
