import { Dimensions, StyleSheet } from "react-native";
import { LightThemeColors, DarkThemeColors } from "../../../../config/color";
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
			flex: 1,
			backgroundColor: isDarkMode ? BaseColor.blackColor : "white",
		},
		container: {
			flex: 1,
			backgroundColor: isDarkMode ? BaseColor.blackColor : "white",
		},
		imageContainer: {
			alignItems: "center",
			marginTop: 30,
			marginBottom: 4,
		},
		imageStyle: {
			width: 116,
			height: 116,
			borderRadius: 70,
			borderColor: BaseColor.lightPrimaryColor,
			borderWidth: 1,
		},
		titleContainer: {
			width: "100%",
			alignItems: "center",
			marginBottom: 4,
		},
		title: {
			alignItems: "center",
			color: isDarkMode ? "white" : "black",
			fontFamily: "Proxima Nova Semibold",
			fontSize: 25,
		},
		ratingContainer: {
			flexDirection: "row",
			justifyContent: "center",
			width: "100%",
			marginBottom: 14,
		},
		ratingText: { paddingLeft: 5, color: BaseColor.fieldColor },
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
		followerNumberText: { color: BaseColor.fieldColor },
		followingNumberContainer: {
			// width: "50%",
			// alignItems: "center",
			// paddingRight: 145,
		},
		followingNumberText: { color: BaseColor.fieldColor },
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
			backgroundColor: BaseColor.blackColor,
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
			color: BaseColor.fieldColor,
			paddingLeft: 41,
			paddingTop: 49.5,
		},
		titleStyle: {
			fontFamily: "Proxima Nova",
			fontSize: 19,
			color: BaseColor.fieldColor,
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
			color: isDarkMode ? "#D2D2D2" : "grey",
			fontSize: 16,
			fontWeight: "bold",
			marginBottom: 10,
		},
		itemImage: {
			width: "100%",
			height: 500,
		},
	});
	return styles;
};
