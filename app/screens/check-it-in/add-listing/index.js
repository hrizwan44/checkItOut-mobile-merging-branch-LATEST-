import React, { useState, useEffect, useContext } from "react";
import { View, Text, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import InternalHeader from "../../../components/Header/InternalHeader";
import { BaseColor } from "../../../config";
import Delivery from "./Delivery";
import Details from "./Details";
import Main from "./Main";
import Price from "./Price";
import EntypoIcon from "react-native-vector-icons/Entypo";
import getStyles from "./styles";
import NavigationService from "../../../navigation/NavigationService";
import Loader from "../../../components/LoaderScreen";
import { ThemeContext } from "../../../context/ThemeContext";
import { NavigationEvents } from "react-navigation";

const renderScene = SceneMap({
	1: Main,
	2: Details,
	3: Price,
	4: Delivery,
});
const renderTabBar = (props) => (
	<TabBar
		{...props}
		indicatorStyle={{
			backgroundColor: BaseColor.primaryLightColor,
			height: 2,
		}}
		style={{ backgroundColor: BaseColor.backgroundColor, height: 2 }}
	/>
);
const { width, height } = Dimensions.get("window");
const AddListing = (props) => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 1, label: "Add a listing" },
		{ key: 2, label: "Details" },
		{ key: 3, label: "Price" },
		{ key: 4, label: "Delivery" },
	]);
	const [tempState, setTempState] = useState(0);
	const [styles, setStyles] = useState();
	const themeContext = useContext(ThemeContext);
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		console.log("PREVIEW PROPS")
		console.log(props?.navigation)
	}, [tempState]);
	const _handleTab = (tabIndex) => {
		setIndex(tabIndex);
	};
	return (
		<>
			{!styles ? (
				<Loader />
			) : (
				<>
					<NavigationEvents
						onDidFocus={(payload) => setTempState(tempState + 1)}
					/>
					<InternalHeader
						title={routes[index].label}
						titleStyle={styles.title}
						background={styles.header.backgroundColor}
						rightIcon={
							<EntypoIcon
								name="cross"
								size={28}
								color={themeContext.isDarkMode ? "white" : "black"}
								onPress={() =>
									NavigationService.resetAndNavigate("BottomTabNav")
								}
							/>
						}
					/>
					<TabView
						navigationState={{ index, routes }}
						renderScene={renderScene}
						onIndexChange={setIndex}
						initialLayout={{ width: width }}
						renderTabBar={renderTabBar}
						sceneContainerStyle={styles.tab}
					/>
				</>
			)}
		</>
	);
};

export default AddListing;
