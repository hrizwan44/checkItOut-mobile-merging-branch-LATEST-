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
			height: "100%",
			width: "100%",
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#fff",
		},
		cardMainContainer: {
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			flex: 1,
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
			// marginTop: "5%",
			borderColor: "#00FFE5",
			borderWidth: 1,
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "#F1F1F1",
			height: 480,
			width: 320,
			borderRadius: 22,
			alignItems: "center",
			paddingTop: "11%",
		},
		cardSecondaryContainer: {
			backgroundColor: "#707070",
			height: 175,
			width: "100%",
			margin: 7,
			borderRadius: 26,
			alignItems: "center",
			justifyContent: "center",
			position: "relative",
			overflow: "hidden",
		},
		textRow: { flexDirection: "row", marginBottom: "6%" },
		icon: { marginRight: "10%", justifyContent: "flex-end" },
		icon2: { marginRight: "10%" },
		rowText: {
			fontFamily: "Proxima-Nova",
			fontSize: 18,
			color: theme == "Dark" ? BaseColor.fieldColor : "black",

			textAlign: "center",
			// fontWeight: "300",
		},
		rowText2: {
			fontFamily: "Proxima-Nova",
			fontSize: 18,
			color: theme == "Dark" ? BaseColor.fieldColor : "black",

			textAlign: "justify",
			// fontWeight: "300",
		},
		btn: {
			width: 200,
			alignSelf: "center",
			marginTop: "15%",
		},
		priceMain: { flexDirection: "row", justifyContent: "center" },
		priceDollar: {
			color: theme == "Dark" ? BaseColor.fieldColor : "black",

			fontSize: 30,
			fontFamily: "Proxima-Nova",
		},
		pricePeriod: {
			color: theme == "Dark" ? BaseColor.fieldColor : "black",

			fontSize: 14,
			paddingBottom: "2%",
			alignSelf: "flex-end",
			fontFamily: "Proxima-Nova",
		},
		itemText: {
			position: "absolute",
			bottom: 6,
			color: theme == "Dark" ? BaseColor.fieldColor : "black",

			fontFamily: "Proxima Nova",
			fontSize: 15,
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
