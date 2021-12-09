import { Dimensions, StyleSheet } from "react-native";
import { LightThemeColors, DarkThemeColors } from "../../../config/color";
const { width, height } = Dimensions.get("window");
export default (isDarkMode) => {
	let BaseColor;
	if (!isDarkMode) {
		BaseColor = LightThemeColors;
	} else {
		BaseColor = DarkThemeColors;
	}
	const styles = StyleSheet.create({
		mainContainer: {
			backgroundColor: BaseColor.backgroundColor,
		},
		header: {
			borderBottomWidth: 2,
			backgroundColor: BaseColor.backgroundColor,
			height: 65,
			shadowColor: "#000000",
			shadowOffset: { width: 0, height: 3 },
			shadowOpacity: 0,
			elevation: 6,
		},
		headerTitle: {
			color: BaseColor.textColor,
			textAlign: "center",
			fontFamily: "Proxima Nova Semibold",
			fontSize: 19,
		},
		sectionTitle: {
			fontFamily: "Proxima Nova",
			fontSize: 25,
			color: BaseColor.textColor,
			fontWeight: "bold",
		},
		listItem: {
			paddingLeft: 15,
			fontFamily: "Proxima Nova",
			fontSize: 19,
			color: BaseColor.textColor,
		},
	});
	return styles;
};
