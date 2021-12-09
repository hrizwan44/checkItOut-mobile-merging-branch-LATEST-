import { StyleSheet, Dimensions } from "react-native";
import { BaseColor, BaseStyle, PurpleColor, YellowColor } from "../../config";

const { width, height } = Dimensions.get("window");
const bottomContainerHeight = 55;
const styles = StyleSheet.create({
	container: {
		width: width,
		paddingTop: 19,
		paddingLeft: 18,
		backgroundColor: BaseColor.backgroundColor,
		height: "100%",
	},
	title: {
		color: "white",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 23,
		height: 33,
		marginBottom: 6,
	},
	item: {
		color: "white",
		fontSize: 17,
		marginBottom: 8,
	},
});

export default styles;
