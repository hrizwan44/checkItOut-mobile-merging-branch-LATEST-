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
import { InternalHeader, ScreenBottomThreshold } from "../../../../components";
import EntypoIcon from "react-native-vector-icons/Entypo";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Stars from "../../../../assets/icons/Stars.svg";
import ArrowCard from "../../../../assets/icons/ArrowCard.svg";
import LinkCard from "../../../../components/ProfileDetail/LinkCard";
import getStyles from "./styles";
import { ThemeContext } from "../../../../context/ThemeContext";
import { Button } from "../../../../components";
import { BaseColor } from "../../../../config";
import NavigationService from "../../../../navigation/NavigationService";
const sellerItems = [
	{
		title: "Audi R8",
		condition: "Used",
		image:
			"https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/e-tron-gt/1920x1080-e-tron-gt.jpg?imwidth=749&imdensity=1",
	},
	{
		title: "Audi R8",
		condition: "Used",
		image:
			"https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/e-tron-gt/1920x1080-e-tron-gt.jpg?imwidth=749&imdensity=1",
	},
];
const ProfileMain = (props) => {
	const [isDarkMode, setIsDarkMode] = useState();
	const themeContext = useContext(ThemeContext);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	// const { userSession } = useContext(AuthProvider);
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		console.log("Profile");
	}, []);
	return (
		<>
			<View style={styles.sellerItemsContainer}>
				<Text style={styles.sellerItemsContainerTitle}>
					Items from this Seller
				</Text>
				<ScrollView
					keyboardShouldPersistTaps="handled"
					style={styles.itemsContainer}
					contentContainerStyle={styles.itemsContentContainer}
					showsVerticalScrollIndicator={false}
				>
					{sellerItems?.map((item, index) => {
						return (
							<View style={styles.itemContainer}>
								<Text style={styles.itemTitle}>{item.title}</Text>
								<Text style={styles.itemCondition}>{item.condition}</Text>
								<Image
									source={{
										uri: item.image,
									}}
									style={styles.itemImage}
									resizeMode="cover"
								/>
							</View>
						);
					})}
				</ScrollView>
				<ScreenBottomThreshold />
			</View>
		</>
	);
};
export default ProfileMain;
