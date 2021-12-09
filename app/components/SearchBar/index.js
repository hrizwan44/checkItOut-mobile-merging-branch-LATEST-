import React, { useEffect, useState, useContext } from "react";

import { View, TouchableOpacity, SafeAreaView } from "react-native";
import { Image, Icon, Text } from "../";
import getStyles from "./styles";
import PropTypes from "prop-types";
import { CustomTextInput } from "../index";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { BaseColor } from "../../config";
import { ThemeContext } from "../../context/ThemeContext";

const Searchbar = ({ width, height, margin }) => {
	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [searchText, setSearchText] = useState();
	return (
		<CustomTextInput
			rightIcon={
				<FontAwesomeIcon
					name="search"
					color="#D0D0D0"
					iconFamily="Ionicons"
					size={25}
				/>
			}
			style={[
				styles.searchBar,
				{ width: width, height: height, margin: margin },
			]}
			inputStyle={styles.searchBarInput}
			placeholder={"Search"}
			placeholderTextColor={theme ? "white" : "black"}
			onChangeText={(text) => setSearchText(text)}
			value={searchText}
			selectionColor={BaseColor.primaryColor}
		/>
	);
};
export default Searchbar;
