import React, { useEffect, useState, useContext } from "react";

import {
	SafeAreaView,
	View,
	ScrollView,
	Text,
	Image,
	ActivityIndicator,
	TouchableHighlight,
} from "react-native";
// import { Text } from "../../components";
import { Button } from "../../../components";
import Header from "../../../components/Header";
import { BaseColor } from "../../../config";
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
	const [folderName, setFolderName] = useState('');

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

	const createButtonFun = () => {
		props.handleSubmit(folderName)
	}

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
					<CustomeTextInput
						style={{ borderRadius: 15, borderWidth: 1 }}
						autoCorrect={false}
						placeholder="Name"
						keyboardType="email-address"
						inputStyle={{
							paddingLeft: 20,
							fontSize: 17,
							fontFamily: "Sogoe UI",
							width: "100%",
							borderRadius: 100,
						}}
						onChangeText={(val) => {
							setFolderName(val)
						}}
						// onBlur={formik.handleBlur("name")}
						value={folderName}
					/>
					<View
						style={{
							width: "80%",
							paddingTop: "15%",
							alignSelf: "center",
						}}
					>
						<Button
							style={styles.createButton}
							gradient
							gradientType="horizontalRight"
							gradientColor={[
								BaseColor.buttonPrimaryGradientStart,
								BaseColor.buttonPrimaryGradientEnd,
							]}
							// disabled={!(formik.isValid && formik.dirty && !isLoading)}
							onPress={createButtonFun}
						>
							Create Folder
						</Button>
					</View>
				</View>
			</View>
		</View>
	);
};
export default SavedItemsModal;
