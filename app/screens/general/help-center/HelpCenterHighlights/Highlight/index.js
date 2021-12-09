import React, { useEffect, useState, useContext } from "react";

import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { BaseColor } from "../../../../../config";
import getStyles from "./styles";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { ThemeContext } from "../../../../../context/ThemeContext";

// import styles from './styles'

const Highlight = ({ highlight, handleDescription }) => {
	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	useEffect(() => {
		console.log("Profile Settings");

		setStyles(getStyles(themeContext.isDarkMode));
		setTheme(themeContext.isDarkMode);
	}, []);
	return (
		<TouchableOpacity
			style={styles.categoryContainer}
			onPress={() => handleDescription(highlight.description)}
		>
			<Text style={styles.title}>{highlight.title}</Text>
			<EntypoIcon
				name="chevron-small-right"
				color={BaseColor.primaryLightColor}
				size={22}
			/>
		</TouchableOpacity>
	);
};
export default Highlight;
