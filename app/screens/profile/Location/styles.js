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
		headerTitle: {
			color: theme == "Dark" ? BaseColor.fieldColor : "black",
			textAlign: "center",
			fontFamily: "Proxima Nova Semibold",
			fontSize: 19,
		},
		textInput: {
			// height: 60,
			backgroundColor: BaseColor.fieldColor,
			borderRadius: 10,
			width: "70%",
			borderWidth: 1,
			borderColor: "#00FFE5",
		},
		createButton: {
			backgroundColor: "#5D5D5D",
			borderWidth: 1,
			marginTop: "10%",
			borderColor: "#00FFE5",
			borderRadius: 10,
			// height: 60,
			width: "100%",
		},
		locationButton: {
			borderWidth: 1,
			borderColor: "#00FFE5",
			borderRadius: 10,
			// height: 60,
			width: "100%",
		},
		label: {
			fontFamily: "Proxima Nova",
			fontSize: 19,
			paddingTop: 10,
			paddingBottom: 10,
			textAlign: "center",
			color: theme == "Dark" ? BaseColor.fieldColor : "black",
		},
	});
	return styles;
};
