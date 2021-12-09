import { Dimensions, StyleSheet } from "react-native";
import { BaseColor } from "../../../config";
const { width, height } = Dimensions.get("window");
const theme = "Light";
export default (isDarkMode) => {
	let theme;
	if (!isDarkMode) {
		theme = "Light";
	} else {
		theme = "Dark";
	}
	const styles = StyleSheet.create({
		mainContainer: {
			flex: 1,
			minHeight: height,
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
		},
		cardMainContainer: {
			flexDirection: "row",
			flexWrap: "wrap",
		},
		header: {
			borderBottomWidth: 2,
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
			height: 65,
			shadowColor: "#000000",
			shadowOffset: { width: 0, height: 3 },
			shadowOpacity: 0,
			elevation: 6,
		},
		cardContainer: {
			paddingTop: "5%",
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
			height: 210,
			width: "40%",
			marginTop: "8%",
			marginLeft: "7.5%",
			borderRadius: 26,
			alignItems: "center",
			justifyContent: "center",
			paddingBottom: "5%",
		},
		cardSecondaryContainer: {
			backgroundColor: theme == "Dark" ? "#707070" : "#fff",
			borderWidth: 1,
			height: 175,
			width: "100%",
			margin: 7,
			borderRadius: 26,
			alignItems: "center",
			justifyContent: "center",
			position: "relative",
			overflow: "hidden",
		},
		itemText: {
			position: "absolute",
			bottom: 6,
			color: BaseColor.fieldColor,
			fontFamily: "Proxima Nova",
			fontSize: 15,
		},
		cardTitle: {
			color: theme == "Dark" ? BaseColor.fieldColor : "black",
			fontFamily: "Segoe UI",
			fontWeight: "bold",
			fontSize: 18,
		},
		headerTitle: {
			color: theme == "Dark" ? BaseColor.fieldColor : "black",
			textAlign: "center",
			fontFamily: "Proxima Nova Semibold",
			fontSize: 19,
		},
	});
	return styles;
};
