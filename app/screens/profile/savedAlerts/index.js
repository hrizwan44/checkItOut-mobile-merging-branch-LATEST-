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
import ArrowCard from "../../../assets/icons/savedAlertCross.svg";
import { TouchableOpacity } from "react-native";
import LinkCard from "../../../components/ProfileDetail/LinkCard";
import PlusIcon from "../../../assets/icons/PlusIcon.svg";
import HeartIcon from "../../../assets/icons/heartIcon.svg";
import Cross from "../../../assets/icons/Cross.svg";
import Sprinkle from "../../../assets/icons/sprinkle.svg";
import GoldSprinkle from "../../../assets/icons/gold-sprinkle.svg";
import Bell from "../../../assets/icons/bellIcon.svg";
import BellLight from "../../../assets/icons/bellLight.svg";
import LightArrow from "../../../assets/icons/LightThemeCross.svg";
import { ThemeContext } from "../../../context/ThemeContext";

const theme = "Light";
import CustomeTextInput from "../../../components/CustomTextInput/index";
const SavedAlerts = (props) => {
	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [user, setUser] = useState({
		title: "Dax Hunter",
		phone: "03110110335",
		email: "daxhunter110@gmail.com",
	});
	const [empty, setEmpty] = useState(false);
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		setTheme(themeContext.isDarkMode);
	}, []);
	return (
		<View style={styles.mainContainer}>
			<Header
				title="Saved Search Alerts"
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
			{empty ? (
				<View style={styles.bellContainer}>
					{theme ? <Bell /> : <BellLight />}
					<Text style={styles.bellText}>
						Use the bell icon in the search bar to save searches here.
					</Text>
				</View>
			) : (
				<View style={{ paddingHorizontal: 34, marginTop: "4%" }}>
					<LinkCard
						title={"iPhone 12 pro"}
						subTitle={"near Central Park"}
						titleStyle={styles.titleStyle}
						subTitleStyle={styles.subTitleStyle}
						renderRight={theme ? <ArrowCard /> : <LightArrow />}
						renderRightStyle={{ paddingTop: "70%" }}
						onPressRight={() => {
							setEmpty(true);
						}}
					/>
					<LinkCard
						title={"Audi A4"}
						subTitle={"near Central Park"}
						titleStyle={styles.titleStyle}
						subTitleStyle={styles.subTitleStyle}
						renderRight={theme ? <ArrowCard /> : <LightArrow />}
						renderRightStyle={{ paddingTop: "70%" }}
						onPressRight={() => {}}
					/>
					<LinkCard
						title={"Oneplus 8 pro"}
						subTitle={"near Central Park"}
						titleStyle={styles.titleStyle}
						subTitleStyle={styles.subTitleStyle}
						renderRight={theme ? <ArrowCard /> : <LightArrow />}
						renderRightStyle={{ paddingTop: "70%" }}
						onPressRight={() => {}}
					/>
					<LinkCard
						title={"Audio Technical"}
						subTitle={"near Central Park"}
						titleStyle={styles.titleStyle}
						subTitleStyle={styles.subTitleStyle}
						renderRight={theme ? <ArrowCard /> : <LightArrow />}
						renderRightStyle={{ paddingTop: "70%" }}
						onPressRight={() => {}}
					/>
				</View>
			)}
		</View>
	);
};
export default SavedAlerts;
