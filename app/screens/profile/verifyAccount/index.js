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
import { LinearTextGradient } from "react-native-text-gradient";
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
import Cross from "../../../assets/icons/Cross.svg";
import Sprinkle from "../../../assets/icons/sprinkle.svg";
import GoldSprinkle from "../../../assets/icons/gold-sprinkle.svg";
import LightArrow from "../../../assets/icons/LightThemeArrow.svg";
import CustomeTextInput from "../../../components/CustomTextInput/index";
import { ThemeContext } from "../../../context/ThemeContext";

const VerifyAccount = (props) => {
	const themeContext = useContext(ThemeContext);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));

	const [user, setUser] = useState({
		title: "Dax Hunter",
		phone: "03110110335",
		email: "daxhunter110@gmail.com",
	});
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		console.log("Profile Settings1");
	}, []);
	return (
		<ScrollView
			keyboardShouldPersistTaps="handled"
			style={styles.mainContainer}
		>
			<Header
				title="Verify your account"
				titleStyle={styles.headerTitle}
				whiteColor
				styleRight={{ paddingBottom: 12 }}
				style={styles.header}
				renderLeft={() => {
					return <Arrow />;
				}}
				onPressLeft={() => {
					props.navigation.goBack(null);
				}}
			/>
			<View style={{ paddingHorizontal: 34, marginTop: "4%" }}>
				<LinkCard
					title={"Email Verification"}
					titleStyle={styles.titleStyle}
					renderRight={
						themeContext.isDarkMode == "Dark" ? <ArrowCard /> : <LightArrow />
					}
					renderRightStyle={{ paddingTop: "70%" }}
					onPressRight={() => {
						props.navigation.navigate("EditEmail");
					}}
				/>
				<LinkCard
					title={"Add image"}
					titleStyle={styles.titleStyle}
					renderRight={
						themeContext.isDarkMode == "Dark" ? <ArrowCard /> : <LightArrow />
					}
					renderRightStyle={{ paddingTop: "70%" }}
					onPressRight={() => {}}
				/>
				<LinkCard
					title={"Verify phone"}
					titleStyle={styles.titleStyle}
					renderRight={
						themeContext.isDarkMode == "Dark" ? <ArrowCard /> : <LightArrow />
					}
					renderRightStyle={{ paddingTop: "70%" }}
					onPressRight={() => {
						props.navigation.navigate("EditNumber");
					}}
				/>
				<LinkCard
					title={"Connect with Facebook"}
					titleStyle={styles.titleStyle}
					renderRight={
						themeContext.isDarkMode == "Dark" ? <ArrowCard /> : <LightArrow />
					}
					renderRightStyle={{ paddingTop: "70%" }}
					onPressRight={() => {}}
				/>
			</View>
		</ScrollView>
	);
};
export default VerifyAccount;
