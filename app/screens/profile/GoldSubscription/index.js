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
import Sprinkle2 from "../../../assets/icons/sprinkle-large2.svg";
import CustomeTextInput from "../../../components/CustomTextInput/index";
import { ThemeContext } from "../../../context/ThemeContext";

const GoldSubscription = (props) => {
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
		<View style={styles.mainContainer}>
			<Header
				title="Premium Subscription"
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
			<View style={styles.cardMainContainer}>
				<View style={styles.cardContainer}>
					<LinearTextGradient
						style={{ fontWeight: "bold", fontSize: 22 }}
						locations={[0, 1]}
						colors={["#B78628", "#FCC201"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
					>
						<Text>GOLD</Text>
					</LinearTextGradient>

					<View style={{ marginTop: "8%" }}>
						<View style={styles.textRow}>
							<View style={styles.icon}>
								<Image
									source={require("../../../assets/icons/sprinkle-gold.png")}
								/>
							</View>

							<Text style={styles.rowText}>up to 30 seconds video</Text>
						</View>
						<View style={styles.textRow}>
							<View style={styles.icon}>
								<Image
									source={require("../../../assets/icons/sprinkle-gold.png")}
								/>
							</View>

							<Text style={styles.rowText}>No Advertisements</Text>
						</View>
						<View style={styles.textRow}>
							<View style={styles.icon}>
								<Image
									source={require("../../../assets/icons/sprinkle-gold.png")}
								/>
							</View>

							<Text style={styles.rowText}>Promote up to 6 ads</Text>
						</View>
						<View style={styles.textRow}>
							<View style={styles.icon2}>
								<Image
									source={require("../../../assets/icons/sprinkle-gold.png")}
								/>
							</View>

							<Text style={styles.rowText2}>No Ad exipry</Text>
						</View>
						<View style={styles.priceMain}>
							<Text style={styles.priceDollar}>$9.99</Text>
							<Text style={styles.pricePeriod}>/month</Text>
						</View>

						<Button
							gradient
							gradientColor={["#B78628", "#FCC201"]}
							round
							styleText={{ color: "black" }}
							round
							style={styles.btn}
						>
							Make Payment
						</Button>
					</View>
				</View>
			</View>
		</View>
	);
};
export default GoldSubscription;
