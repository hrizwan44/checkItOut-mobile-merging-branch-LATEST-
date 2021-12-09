import React, { useEffect, useState, useContext } from "react";

import {
	SafeAreaView,
	View,
	ScrollView,
	Text,
	Image,
	ActivityIndicator,
	TouchableHighlight,
	Modal,
} from "react-native";
// import { Text } from "../../components";
import { Button } from "../../../components";
import Header from "../../../components/Header";
import { BaseColor, FontWeight } from "../../../config";
import getStyles from "./styles";

import Arrow from "../../../assets/icons/Arrow.svg";
import ArrowCard from "../../../assets/icons/ArrowCard.svg";
import { TouchableOpacity } from "react-native";
import LinkCard from "../../../components/ProfileDetail/LinkCard";
import PlusIcon from "../../../assets/icons/PlusIcon.svg";
import HeartIcon from "../../../assets/icons/heartIcon.svg";
import Cross from "../../../assets/icons/CrossModal.svg";
import CustomeTextInput from "../../../components/CustomTextInput/index";
import { ThemeContext } from "../../../context/ThemeContext";

const SavedItemsModal = (props) => {
	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [user, setUser] = useState({
		title: "Dax Hunter",
		phone: "03110110335",
		email: "daxhunter110@gmail.com",
	});

	useEffect(() => {
		console.log("Edit");
		setStyles(getStyles(themeContext.isDarkMode));
		setTheme(themeContext.isDarkMode);
	}, []);
	return (
		<View style={styles.mainContainer}>
			<View style={styles.cardMainContainer}>
				<TouchableOpacity
					onPress={props.hideAddModal}
					style={{ marginTop: "5%", marginRight: "5%", alignSelf: "flex-end" }}
				>
					<Cross />
				</TouchableOpacity>
				<View style={styles.cardContainer}>
					<Text style={styles.bidText}>Bid on this item</Text>
					<CustomeTextInput
						textAlign={"center"}
						style={{
							borderRadius: 15,
							borderWidth: 1,
							width: "80%",
							height: 80,
							textAlign: "center",
						}}
						autoCorrect={false}
						placeholder="$0"
						keyboardType="email-address"
						inputStyle={{
							paddingLeft: 10,
							fontSize: 30,
							fontFamily: "Sogoe UI",
							width: "100%",
							borderRadius: 100,
							textAlign: "center",
						}}
						// onChangeText={formik.handleChange("name")}
						// onBlur={formik.handleBlur("name")}
						// value={formik.values.name}
					/>
					<View
						style={{
							width: "80%",
							paddingTop: "10%",
							alignSelf: "center",
							paddingBottom: "15%",
						}}
					>
						<Button
							style={styles.createButton}
							gradient
							gradientType="normal"
							gradientColor={[
								BaseColor.buttonPrimaryGradientStart,
								BaseColor.buttonPrimaryGradientEnd,
							]}
							// disabled={!(formik.isValid && formik.dirty && !isLoading)}
							onPress={props.handleSubmit}
						>
							Bid
						</Button>
					</View>
				</View>
			</View>
		</View>
	);
};
export default SavedItemsModal;
