import React, { useEffect, useState, useContext } from "react";
import { View, Text, Image } from "react-native";
import getStyles from "./style";

import { ThemeContext } from "../../../context/ThemeContext";

const Notification = (props) => {
	const themeContext = useContext(ThemeContext);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
	}, [themeContext.isDarkMode]);
	return (
		<View style={styles.notificationContainer}>
			<Image
				style={styles.image}
				source={require("../../../assets/icons/avatar.png")}
			/>
			<Text style={styles.text}>280 people liked your ad!</Text>
			<View>
				<Text style={styles.time}>2h</Text>
			</View>
		</View>
	);
};
const notifications = [{}, {}];
const Notifications = () => {
	const themeContext = useContext(ThemeContext);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
	}, [themeContext.isDarkMode]);
	return (
		<View style={styles.notificationsContainer}>
			{notifications.map((notification, idx) => {
				return <Notification />;
			})}
		</View>
	);
};

export default Notifications;
