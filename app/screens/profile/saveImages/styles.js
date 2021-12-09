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
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
		},
		cardMainContainer: {
			flexDirection: "row",
			flexWrap: "wrap",
			height: 300,
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
			paddingTop: "15%",
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
			height: "100%",
			width: "38%",
			marginLeft: "7.5%",
			alignItems: "center",
			justifyContent: "center",
			paddingBottom: "5%",
		},
		cardSecondaryContainer: {
			backgroundColor: "#000",
			height: 250,
			width: "90%",
			marginTop: "7%",
			alignItems: "center",
			justifyContent: "center",
		},
		itemText: {
			top: 2,
			bottom: 6,
			color: theme == "Dark" ? BaseColor.fieldColor : "black",
			fontFamily: "Segoe UI	",
			fontSize: 11,
		},
		cardTitle: {
			color: theme == "Dark" ? BaseColor.fieldColor : "black",

			fontFamily: "Segoe UI",
			fontWeight: "900",
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
