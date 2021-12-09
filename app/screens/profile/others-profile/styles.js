import { Dimensions, StyleSheet } from "react-native";
import { BaseColor } from "../../../config";
import { LightThemeColors, DarkThemeColors } from "../../../config/color";
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
			minHeight: height - 68,
		},
		container: {
			flex: 1,

			backgroundColor: BaseColorImp.backgroundColor,
		},
		imageContainer: {
			alignItems: "center",
			marginTop: 10,
			marginBottom: 4,
		},
		imageStyle: {
			width: 116,
			height: 116,
			borderRadius: 70,
			borderColor: BaseColorImp.lightPrimaryColor,
			borderWidth: 1,
		},
		titleContainer: {
			width: "100%",
			alignItems: "center",
			marginBottom: 4,
		},
		title: {
			alignItems: "center",
			color: BaseColorImp.fieldColor,
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
		infosContainer: {
			width: "100%",
			justifyContent: "space-evenly",
			flexDirection: "row",
			marginBottom: 4,
		},
		infoContainer: {
			alignItems: "center",
		},
		followerText: { color: "#858585" },
		followingText: {
			color: "#858585",
		},
		numbersContainer: {
			width: "100%",
			justifyContent: "space-evenly",
			flexDirection: "row",
			marginBottom: 4,
		},
		followerNumberContainer: {
			backgroundColor: "green",
			width: "10%",
			alignItems: "center",
		},
		followerNumberText: { color: BaseColorImp.fieldColor },
		followingNumberContainer: {
			// width: "50%",
			// alignItems: "center",
			// paddingRight: 145,
		},
		followingNumberText: { color: BaseColorImp.fieldColor },
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
		},
		listContainer: {
			backgroundColor: BaseColorImp.blackColor,
			borderTopLeftRadius: 40,
			borderTopRightRadius: 40,
			paddingBottom: 20,
		},
		scrollContent: { paddingBottom: 20, flexGrow: 1 },
		listFirstHeading: {
			fontFamily: "Proxima Nova Semibold",
			fontSize: 25,
			color: BaseColor.fieldColor,
			paddingLeft: 41,
			paddingTop: 35,
		},
		listHeading: {
			fontFamily: "Proxima Nova Semibold",
			fontSize: 25,
			color: BaseColorImp.fieldColor,
			paddingLeft: 41,
			paddingTop: 49.5,
		},
		titleStyle: {
			fontFamily: "Proxima Nova",
			fontSize: 19,
			color: BaseColorImp.fieldColor,
			paddingLeft: 87,
		},
		sellerItemsContainer: {
			width: "100%",
			alignItems: "center",
			marginTop: 30,
		},
		sellerItemsContainerTitle: {
			color: isDarkMode ? "white" : "black",
			fontSize: 16,
			fontWeight: "bold",
		},
		itemsContainer: {
			width: "70%",
		},
		itemsContentContainer: {
			alignItems: "center",
			marginTop: 10,
		},
		itemContainer: {
			width: "100%",
			alignItems: "center",
			marginTop: 30,
		},
		itemTitle: {
			color: isDarkMode ? "white" : "black",
			fontSize: 24,
			fontWeight: "bold",
		},
		itemCondition: {
			color: "#D2D2D2",
			fontSize: 16,
			fontWeight: "bold",
			marginBottom: 10,
		},
		itemImage: {
			width: "100%",
			height: 500,
		},
		modalContainer: {
			alignItems: "center",
			justifyContent: "center",
		},
		warning: { marginBottom: 25 },
		modalTitle: { color: "#FFFFFF", fontSize: 15 },
		modalSubTitle: {
			color: "#FFFFFF",
			fontSize: 8,
			textDecorationLine: "underline",
			marginBottom: 50,
		},
	});

	return styles;
};
