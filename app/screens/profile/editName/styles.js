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
		textInputCurrent: {
			height: 60,
			backgroundColor: BaseColor.fieldColor,
			borderRadius: 10,
			width: "100%",
			borderWidth: 1,
			borderColor: "#00FFE5",
		},
		textInput: {
			// height: 60,
			backgroundColor: BaseColor.fieldColor,
			borderRadius: 10,
			width: "100%",
			borderWidth: 1,
			borderColor: "#00FFE5",
		},
		createButton: {
			borderWidth: 1,
			borderColor: "#00FFE5",
			backgroundColor: "#5D5D5D",
			justifyContent: "center",
			borderRadius: 10,
			// height: 60,
			width: "100%",
		},
		label: {
			fontFamily: "Segoe UI",
			fontSize: 20,
			paddingTop: 20,
			paddingBottom: 14,
			paddingLeft: 5,
			textAlign: "left",
			color: theme == "Dark" ? BaseColor.fieldColor : "black",
		},
		topText: {
			paddingLeft: "5.21%",
			paddingRight: "5.21%",
			fontFamily: "Proxima Nova",
			fontSize: 16,
			textAlign: "center",
			color: BaseColor.fieldColor,
		},
	});
	return styles;
};
