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
			height: "100%",
			width: "100%",
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
		},
		cardsMainContainer: {
			flex: 1,
			alignContent: "center",
			alignItems: "center",
		},
		cardMainContainer: {
			marginTop: "5%",
			borderColor: "#00FFE5",
			borderWidth: 1,
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#F1F1F1",
			height: 280,
			width: 237,
			borderRadius: 22,
			alignItems: "center",
			paddingTop: "5%",
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
		price: {
			fontFamily: "Proxima-Nova",
			fontSize: 12,
			color: theme == "Dark" ? BaseColor.fieldColor : "black",
			fontWeight: "400",
			marginTop: "2%",
		},
		textRow: { flexDirection: "row", marginBottom: "4%" },
		icon: { marginRight: "3%", justifyContent: "flex-end" },
		rowText: {
			fontFamily: "Proxima-Nova",
			fontSize: 14,
			color: theme == "Dark" ? BaseColor.fieldColor : "black",
			fontWeight: "300",
		},
		btn: {
			width: 150,
			alignSelf: "center",
			marginTop: "5%",
		},
		headerTitle: {
			color: theme == "Dark" ? BaseColor.fieldColor : "black",
			textAlign: "center",
			fontFamily: "Proxima-Nova-Semibold",
			fontSize: 19,
		},
		containerGold: {
			marginTop: "4%",
			borderColor: "#B78628",
			borderWidth: 1,
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#F1F1F1",
			height: 280,
			width: 237,
			borderRadius: 22,
			alignItems: "center",
			paddingTop: "5%",
		},
	});
	return styles;
};
