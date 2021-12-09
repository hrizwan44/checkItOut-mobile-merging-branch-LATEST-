import { StyleSheet } from "react-native";

export default (isDarkMode) => {
	let theme;
	if (!isDarkMode) {
		theme = "Light";
	} else {
		theme = "Dark";
	}
	const styles = StyleSheet.create({
		cardContainer: {
			flex: 1,
			flexDirection: "row",
			paddingBottom: 17,
			paddingTop: 17,
			paddingLeft: 5,
			paddingRight: 10,

			backgroundColor: theme == "Dark" ? "#2B2B2B" : "#B4B4B4",
			marginBottom: 17,
		},
		profile: {
			height: 135,
			width: 110,
			alignItems: "center",
		},
		textContainer: { flex: 2 },
		heading: {
			fontSize: 29,
			fontWeight: "bold",
			fontFamily: "Segoe UI Semilight",
			color: theme == "Dark" ? "white" : "black",
		},
		text: {
			fontSize: 17,
			fontWeight: "normal",
			fontFamily: "Segoe UI Semilight",

			color: theme == "Dark" ? "white" : "black",
		},
	});
	return styles;
};
