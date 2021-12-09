import React, { useEffect, useState, useContext } from "react";

import { View } from "react-native";
import { SafeAreaView, Text, ScrollView } from "react-native";
import { Button, Searchbar } from "../../../../components";
import getStyles from "./styles";
import { ThemeContext } from "../../../../context/ThemeContext";
import { BaseStyle } from "../../../../config";
import InternalHeader from "../../../../components/Header/InternalHeader";
const categories = [
	{ title: "How to find your order status?" },
	{ title: "What is the verified shop" },
	{
		title:
			"What is the verified shop What is the verified shopWhat is the verified shopWhat is the verified shopWhat is the verified shopWhat is the verified shopWhat is the verified shopWhat is the verified shop",
	},
];
const HelpCenterDetails = ({ description }) => {
	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));

	useEffect(() => {
		console.log("Profile Settings");
		setStyles(getStyles(themeContext.isDarkMode));
		setTheme(themeContext.isDarkMode);
	}, []);
	return (
		<ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
			<View style={styles.contentContainer}>
				<Text style={styles.title}>{description?.title}</Text>
				<Text style={styles.details}>{description?.text}</Text>
			</View>
			<View style={styles.feedBackContainer}>
				<Text style={styles.feedBackTitle}>Was this article helpful?</Text>
				<View style={styles.feedBackButtonContainer}>
					<Button
						style={styles.feedBackButton}
						styleText={styles.feedBackButtonText}
					>
						Yes
					</Button>
					<Button
						style={styles.feedBackButton}
						styleText={styles.feedBackButtonText}
					>
						No
					</Button>
				</View>
			</View>
			<View style={{ width: 10, height: 90 }} />
		</ScrollView>
	);
};

export default HelpCenterDetails;
