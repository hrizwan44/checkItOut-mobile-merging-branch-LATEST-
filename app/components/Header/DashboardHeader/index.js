import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, Dimensions, BackHandler } from "react-native";
import {
	Button,
	CustomTextInput,
	Error,
	Header,
	Icon,
	CustomDropDown,
	TitledList,
	TitledComponent,
	Filters,
} from "../../../components";
import {
	BaseColor,
	BaseStyle,
	PurpleColor,
	YellowColor,
} from "../../../config";
import VideoData from "../../../components/check-it-out/VideoDisplay";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";
import getStyles from "./style";
import { TouchableOpacity } from "react-native";
import { getCategories } from "../../../api/check-it-out/categories";
import Loader from "../../LoaderScreen";
import { retrieveData } from "../../../util/helpers";
import { ThemeContext } from "../../../context/ThemeContext";
export const DashboardHeader = ({
	handleDisplayMode,
	handleActiveMode,
	applyTheme,
}) => {
	const themeContext = useContext(ThemeContext);
	const [categories, setCategories] = useState();
	const [searchText, setSearchText] = useState();
	const [activeMode, setActiveMode] = useState("cio");
	const [displayMode, setDisplayMode] = useState("default");
	const [styles, setStyles] = useState();
	const _handleMode = (mode) => {
		displayMode == mode ? setDisplayMode("default") : setDisplayMode(mode);
		handleDisplayMode(mode);
	};
	const _handleActiveMode = (mode) => handleActiveMode(mode);
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
	}, []);
	return (
		<>
			{!styles ? (
				<Loader />
			) : (
				<View style={styles.header}>
					<View style={styles.headerRow}>
						<TouchableOpacity
							style={
								displayMode == "category"
									? styles.gridIconActive
									: styles.gridIcon
							}
							onPress={() => _handleMode("category")}
						>
							{themeContext.isDarkMode ? (
								<Ionicon name="grid-sharp" color={"white"} size={21} />
							) : (
								<Ionicon name="grid-sharp" color="#6DF4E6" size={21} />
							)}
						</TouchableOpacity>
						<CustomTextInput
							icon={
								<FontAwesomeIcon
									name="search"
									color="#D0D0D0"
									iconFamily="Ionicons"
									size={22}
									style={{ paddingBottom: "1.5%" }}
								/>
							}
							style={styles.searchBar}
							inputStyle={styles.searchBarInput}
							placeholder={"Search"}
							placeholderTextColor={styles.searchBarInput?.color}
							onChangeText={(text) => setSearchText(text)}
							value={searchText}
							selectionColor={BaseColor.primaryColor}
						/>
						<TouchableOpacity
							style={
								displayMode == "filter"
									? styles.filterIconActive
									: styles.filterIcon
							}
							onPress={() => _handleMode("filter")}
						>
							<MaterialCommunityIcon
								name="filter-variant"
								color={themeContext.isDarkMode ? "white" : "#6DF4E6"}
								size={28}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.headerRow}>
						<Button
							// loading={isLoading}
							style={styles.btn}
							gradient
							// gradientType="horizontalRight"

							gradientColor={
								themeContext.isDarkMode
									? activeMode == "cio"
										? ["#00EBD3", "#007380"]
										: ["#101010", "#101010"]
									: activeMode == "cio"
									? ["#00EBD3", "#007380"]
									: ["#8B8A8A", "#8B8A8A"]
							}
							styleText={
								activeMode == "cio"
									? styles.activeButtonText
									: styles.inactiveButtonText
							}
							onPress={() => {
								_handleMode("default");
								setActiveMode("cio");
								_handleActiveMode("cio");
							}}
							// disabled={!(formik.isValid && formik.dirty && !isLoading)}
							// onPress={formik.handleSubmit}
						>
							Check it out
						</Button>
						<Button
							style={styles.btn}
							styleText={
								activeMode == "cii"
									? styles.activeButtonText
									: styles.inactiveButtonText
							}
							gradient
							gradientColor={
								themeContext.isDarkMode
									? activeMode == "cii"
										? ["#00EBD3", "#007380"]
										: ["#101010", "#101010"]
									: activeMode == "cii"
									? ["#00EBD3", "#007380"]
									: ["#8B8A8A", "#8B8A8A"]
							}
							onPress={() => {
								_handleMode("default");
								setActiveMode("cii");
								_handleActiveMode("cii");
							}}
						>
							Check it in
						</Button>
					</View>
				</View>
			)}
		</>
	);
};
