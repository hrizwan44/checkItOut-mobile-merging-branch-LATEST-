import { StyleSheet, Dimensions } from "react-native";
import { BaseColor } from "../../../../config";
import { DarkThemeColors, LightThemeColors } from "../../../../config/color";
const { width, height } = Dimensions.get("window");
const bottomContainerHeight = 55;
export default (isDarkMode) => {
	let BaseColor;
	if (!isDarkMode) {
		BaseColor = LightThemeColors;
	} else {
		BaseColor = DarkThemeColors;
	}
	const styles = StyleSheet.create({
		container: {
			alignItems: "center",
			marginTop: 25,
		},
		componentContainer: {
			width: "90%",
		},
		componentTitle: {
			fontSize: 20,
			color: BaseColor.textColor,
			marginBottom: 8,
		},
		input: {
			borderRadius: 10,
			// borderColor: "#6DF4E6",
			borderWidth: 1,
		},
		inputText: {
			paddingLeft: 10,
			fontSize: 17,
			fontFamily: "Sogoe UI",
			width: "100%",
			borderRadius: 10,
			backgroundColor: "#FFF",
		},
		inputFocus: {
			borderColor: "green",
			borderWidth: 1,
		},

		headerRow: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-evenly",
			width: "95%",
			marginTop: "20%",
		},
		btn: {
			justifyContent: "center",
			borderRadius: 10,
			height: 70,
			width: "46%",
			fontSize: 10,
		},
		buttonText: {
			color: "#6CECD3",
			fontWeight: "bold",
		},
		nextButton: {
			width: "88%",
			borderRadius: 14,
			// height: 60,
			alignSelf: "center",
			// position: "absolute",
			bottom: 15,
			justifyContent: "center",
			marginTop: 40,
			paddingTop: 0,
		},
		videoContainer: {
			width: "75%",
			alignItems: "center",
			marginTop: 35,
			height: 360,
		},
		video: {
			width: "100%",
			height: "100%",
		},
		icon: {
			position: "absolute",
			bottom: 10,
			right: 10,
		},
		subTitle: {
			color: BaseColor.textColor,
			fontSize: 16,
			marginTop: 10,
		},
	});
	return styles;
};
