import React, { useState, useEffect, useCallback, useContext } from "react";
import {
	View,
	ScrollView,
	Text,
	StyleSheet,
	Image,
	Dimensions,
} from "react-native";
import {
	Bubble,
	GiftedChat,
	Send,
	InputToolbar,
} from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { InternalHeader, Button, CustomTextInput } from "../../../components";
import { BaseColor } from "../../../config";
import EntypoIcon from "react-native-vector-icons/Entypo";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import SendIcon from "../../../assets/icons/send-chat.svg";
import getStyles from "./styles";
import { TouchableOpacity } from "react-native";
import Inbox from "./Inbox";
import ChatScreen from "./Chat";
import { ThemeContext } from "../../../context/ThemeContext";
import Loader from "../../../components/LoaderScreen";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Notifications from "../Notifications";
const { width, height } = Dimensions.get("window");

const renderTabBar = (props) => {
	const { isDarkMode } = useContext(ThemeContext);
	return (
		<TabBar
			activeColor={isDarkMode ? "white" : "black"}
			inactiveColor={isDarkMode ? "white" : "black"}
			{...props}
			indicatorStyle={{
				backgroundColor: BaseColor.primaryLightColor,
				height: 3,
				width: 45,
				marginLeft: "14%",
			}}
			style={{
				backgroundColor: isDarkMode ? BaseColor.backgroundColor : "white",
				color: "blue",
				height: 60,
				paddingTop: 20,
			}}
		/>
	);
};
export default ({ navigation }) => {
	const [tempState, setTempState] = useState(0);
	const [screenTitle, setScreenTitle] = useState("Inbox");
	const _handleScreen = (currentScreen) => {
		if (currentScreen == "chat") {
			setScreenTitle("Messages");
		} else {
			setScreenTitle(currentScreen);
		}
	};
	const themeContext = useContext(ThemeContext);
	const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "first", title: "Messages" },
		{ key: "second", title: "Notifications" },
	]);
	const renderScene = SceneMap({
		first: () => <Inbox handleScreen={_handleScreen} />,
		second: Notifications,
	});
	useEffect(() => {
		setStyles(getStyles(themeContext.isDarkMode));
		const unsubscribe = navigation.addListener("didFocus", () => {
			setTempState(tempState + 1);
		});
		return () => {
			unsubscribe;
		};
	}, [tempState]);

	return (
		<>
			<InternalHeader
				title={screenTitle}
				titleStyle={styles.headerTitle}
				background={styles.header.backgroundColor}
				leftIcon={
					<EntypoIcon
						name="chevron-thin-left"
						size={25}
						color={BaseColor.primaryLightColor}
					/>
				}
				handleLeft={() => {
					if (screenTitle === "Inbox") {
						navigation.goBack(null);
					} else {
						_handleScreen("Inbox");
					}
				}}
				rightIcon={
					screenTitle !== "Inbox" ? (
						<SimpleLineIcon name="options-vertical" size={20} color="white" />
					) : null
				}
				handleRight={() => {
					console.log("Handle right");
				}}
			/>
			{screenTitle === "Messages" ? (
				<ChatScreen
					handleScreen={_handleScreen}
					isDarkMode={themeContext.isDarkMode}
				/>
			) : (
				<TabView
					navigationState={{ index, routes }}
					renderScene={renderScene}
					onIndexChange={setIndex}
					initialLayout={{ width: width }}
					renderTabBar={renderTabBar}
					sceneContainerStyle={styles.tab}
				/>
			)}
		</>
	);
};
