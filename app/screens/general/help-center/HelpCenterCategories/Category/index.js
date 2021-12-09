import React, { useEffect, useState, useContext } from "react";

import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import getStyles from "./styles";
import { ThemeContext } from "../../../../../context/ThemeContext";

const Category = ({ handleClick, helpCenter }) => {
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
			onPress={() => handleClick("Highlights", helpCenter.title, helpCenter)}
		>
			<Text style={styles.title}>{helpCenter.title}</Text>
		</TouchableOpacity>
	);
};
export default Category;
