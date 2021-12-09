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

import CustomeTextInput from "../../../components/CustomTextInput/index";
import { ThemeContext } from "../../../context/ThemeContext";

const Subscription = (props) => {
	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [user, setUser] = useState({
		title: "Dax Hunter",
		phone: "03110110335",
		email: "daxhunter110@gmail.com",
	});
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		setTheme(themeContext.isDarkMode);
	}, []);
	return (
		<ScrollView
			keyboardShouldPersistTaps="handled"
			style={styles.mainContainer}
		>
			<Header
				title="Premium Subscription"
				titleStyle={styles.headerTitle}
				whiteColor
				styleRight={{ paddingBottom: 12 }}
				style={styles.header}
				renderLeft={() => {
					// return <Arrow />;
				}}
				onPressLeft={() => {
					props.navigation.goBack(null);
				}}
			/>
			<View style={styles.cardsMainContainer}>
				<View style={styles.cardMainContainer}>
					<LinearTextGradient
						style={{ fontWeight: "bold", fontSize: 22 }}
						locations={[0, 1]}
						colors={["#00EBD3", "#007380"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
					>
						<Text>STANDARD</Text>
					</LinearTextGradient>
					<Text style={styles.price}>$5.99</Text>
					<View style={{ marginTop: "8%" }}>
						<View style={styles.textRow}>
							<View style={styles.icon}>
								<Sprinkle />
							</View>

							<Text style={styles.rowText}>up to 15 seconds video</Text>
						</View>
						<View style={styles.textRow}>
							<View style={styles.icon}>
								<Sprinkle />
							</View>

							<Text style={styles.rowText}>No Advertisements</Text>
						</View>
						<View style={styles.textRow}>
							<View style={styles.icon}>
								<Sprinkle />
							</View>

							<Text style={styles.rowText}>Promote up to 3 ads</Text>
						</View>
						<View style={styles.textRow}>
							<View style={styles.icon}>
								<Sprinkle />
							</View>

							<Text style={styles.rowText}>extended 2 weeks ad expiry</Text>
						</View>
						<Button
							gradient
							gradientColor={["#00EBD3", "#007380"]}
							round
							styleText={{ fontSize: 12 }}
							style={styles.btn}
							onPress={() => props.navigation.navigate("StandardSubscription")}
						>
							Choose Plan
						</Button>
					</View>
				</View>
				<View style={styles.containerGold}>
					<LinearTextGradient
						style={{ fontWeight: "bold", fontSize: 22 }}
						locations={[0, 1]}
						colors={["#B78628", "#FCC201"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
					>
						<Text>GOLD</Text>
					</LinearTextGradient>
					<Text style={styles.price}>$9.99</Text>
					<View style={{ marginTop: "8%" }}>
						<View style={styles.textRow}>
							<View style={styles.icon}>
								<GoldSprinkle />
							</View>

							<Text style={styles.rowText}>up to 15 seconds video</Text>
						</View>
						<View style={styles.textRow}>
							<View style={styles.icon}>
								<GoldSprinkle />
							</View>

							<Text style={styles.rowText}>No Advertisements</Text>
						</View>
						<View style={styles.textRow}>
							<View style={styles.icon}>
								<GoldSprinkle />
							</View>

							<Text style={styles.rowText}>Promote up to 3 ads</Text>
						</View>
						<View style={styles.textRow}>
							<View style={styles.icon}>
								<GoldSprinkle />
							</View>

							<Text style={styles.rowText}>extended 2 weeks ad expiry</Text>
						</View>
						<Button
							gradient
							gradientColor={["#B78628", "#FCC201"]}
							round
							styleText={{ color: "black", fontSize: 12 }}
							style={styles.btn}
							onPress={() => {
								props.navigation.navigate("GoldSubscription");
							}}
						>
							Choose Plan
						</Button>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};
export default Subscription;
