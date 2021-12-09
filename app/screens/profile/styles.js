import { Dimensions, StyleSheet } from "react-native";
import { BaseColor } from "../../config";
import { LightThemeColors, DarkThemeColors } from "../../config/color";
const { width, height } = Dimensions.get("window");
export default (isDarkMode) => {
	let BaseColorImp = BaseColor;
	if (!isDarkMode) {
		BaseColorImp = { ...BaseColorImp, ...LightThemeColors };
	} else {
		BaseColorImp = { ...BaseColorImp, ...DarkThemeColors };
	}
	const styles = StyleSheet.create({
		mainContainer: {
			flex: 1,

			backgroundColor: BaseColorImp.backgroundColor,
		},
		container: { flex: 1, backgroundColor: BaseColorImp.backgroundColor },
		imageContainer: {
			alignItems: "center",
			marginTop: 30,
			marginBottom: 4,
		},
		imageStyle: {
			width: 116,
			height: 116,
			borderRadius: 1500,
		},
		titleContainer: {
			width: "100%",
			alignItems: "center",
			marginBottom: 4,
		},
		title: {
			alignItems: "center",
			color: BaseColorImp.textColor,
			fontFamily: "Proxima Nova Semibold",
			fontSize: 25,
		},
		ratingContainer: {
			flexDirection: "row",
			justifyContent: "center",
			width: "100%",
			marginBottom: 14,
		},
		ratingText: { paddingLeft: 5, color: BaseColorImp.fieldColor },
		followingContainer: {
			justifyContent: "center",
			flexDirection: "row",
			marginBottom: 4,
		},
		followerText: { color: "#858585" },
		followingText: { paddingLeft: 50, color: "#858585" },
		numbersContainer: {
			flexDirection: "row",
			flexWrap: "wrap",
			marginBottom: 14,
		},
		followerNumberContainer: {
			width: "50%",
			alignItems: "center",
			// paddingLeft: 90,
		},
		followerNumberText: { color: BaseColorImp.fieldColor },
		followingNumberContainer: {
			width: "50%",
			alignItems: "center",
			// paddingRight: 145,
		},
		followingNumberText: {
			color: BaseColorImp.fieldColor,
			//  paddingLeft: 50
		},
		buttonContainer: {
			flexDirection: "row",
			justifyContent: "center",
			marginBottom: 15,
		},
		buttonStyle: {
			height: 59,
			width: 255,
			overflow: "hidden",
			borderColor: "#00FFE5",
			borderWidth: 1,
			alignSelf: "center",
			marginBottom: 20,
		},
		listContainer: {
			backgroundColor: BaseColorImp.backgroundProfileList,
			borderTopLeftRadius: 40,
			borderTopRightRadius: 40,
			paddingBottom: 20,
		},
		scrollContent: { paddingBottom: 20, flexGrow: 1 },
		listFirstHeading: {
			fontFamily: "Proxima Nova Semibold",
			fontSize: 25,
			color: BaseColorImp.fieldColor,
			paddingLeft: 41,
			paddingTop: 35,
		},
		listHeading: {
			fontFamily: "Proxima Nova Semibold",
			fontSize: 25,
			color: BaseColorImp.fieldColor,
			paddingLeft: 41,
			paddingTop: 33.1,
		},
		titleStyle: {
			fontFamily: "Proxima Nova",
			fontSize: 19,
			color: BaseColorImp.fieldColor,
			paddingLeft: 87,
		},
		infosContainer: {
			width: "100%",
			justifyContent: "space-evenly",
			flexDirection: "row",
			marginBottom: 4,
		},
		infoContainer: {
			alignItems: "center",
		},
		logout: {
			fontFamily: "Proxima Nova Semibold",
			fontSize: 25,
			color: "#ac1f1f",
			paddingLeft: 41,
			paddingTop: 49.5,
		},
	});
	return styles;
};
