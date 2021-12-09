import { BaseColor, PurpleColor } from "../../config";
import { StyleSheet } from "react-native";

export default (isDarkMode) => {
	let theme;
	if (!isDarkMode) {
		theme = "Light";
	} else {
		theme = "Dark";
	}
	const styles = StyleSheet.create({
		searchBar: {
			width: "70%",
			height: "90%",
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "white",
			borderColor: "#6DF4E6",
			borderWidth: 1,
			borderRadius: 10,
			paddingLeft: "2.5%",
		},
		searchBarInput: {
			width: "85%",
			backgroundColor: theme == "Dark" ? BaseColor.backgroundColor : "white",
			borderRadius: 10,
			fontSize: 22,
			color: "white",
		},
	});
	return styles;
};
