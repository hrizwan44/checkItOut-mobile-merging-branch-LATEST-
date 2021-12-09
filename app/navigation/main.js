import React, { useContext, useEffect, useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import {
	createStackNavigator,
	CardStyleInterpolators,
	TransitionSpecs,
	HeaderStyleInterpolators,
	TransitionPresets,
} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import CustomSideBarMenu from "./CustomSideBarMenu";
import Settings from "../screens/settings/index";
import Dashboard from "../screens/Dashboard";
// import VideoPlay from "../screens/check-it-out/video-play";
import VideoUpload from "../screens/check-it-in/video-upload";
import { BaseColor, BaseStyle, PurpleColor, YellowColor } from "../config";
import NavigationService from "./NavigationService";
import ForgotPassword from "../screens/ForgotPassword";
import AddListing from "../screens/check-it-in/add-listing";
import AdPosted from "../screens/check-it-in/add-listing/AdPosted";
import ProductDescription from "../screens/check-it-out/ProductDescription";
import HelpCenterCategories from "../screens/general/help-center/HelpCenterCategories";
import { Searchbar } from "../components";
import HelpCenterHighlights from "../screens/general/help-center/HelpCenterHighlights";
import HelpCenterDetails from "../screens/general/help-center/HelpCenterDetails";
import VideoPlay from "../screens/Dashboard";
import ProfileNav from "../screens/profile/navigation";
import DashboardNav from "../screens/Dashboard/navigation";
import ChatScreen from "../screens/general/messaging/Chat";
import MessageScreen from "../screens/general/messaging";
import VideoPreview from "../screens/check-it-in/video-upload/VideoPreview";
import ItemListing from "../screens/check-it-in/item-listing";
import { ThemeContext } from "../context/ThemeContext";
import { Theme } from "../util/helpers";
import PremiumIcon from "../assets/icons/premium-icon.svg";
import SubscriptionStack from "../screens/profile/subscription/navigation";

// import VideoPlay from "../screens/Dashboard";
const theme = "Dark";
const navigationOptions = {
	transitionSpec: {
		open: TransitionSpecs.FadeOutToBottomAndroidSpec,
		close: TransitionSpecs.FadeOutToBottomAndroidSpec,
	},
	cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
	headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};

const TabBarComponent = (props) => {
	const themeContext = useContext(ThemeContext);
	const [theme, setTheme] = useState(themeContext.isDarkMode);
	useEffect(() => {
		console.log("Theme", theme);
		setTheme(themeContext);
	}, [props]);

	return (
		<BottomTabBar
			{...props}
			inactiveTintColor={themeContext.isDarkMode ? "#fff" : "#000"}
			style={{
				...props.style,
				backgroundColor: themeContext.isDarkMode ? "#262626" : "#fff",
			}}
		/>
	);
};

const bottomTabNavConfig = {
	initialRouteName: "Dashboard",
	shifting: false,
	lazy: true,
	tabBarOptions: {
		animationEnabled: true,
		showIcon: true,
		showLabel: false,
		unmountOnBlur: true,
		resetOnBlur: true,
		activeTintColor: "#00FFE5",
		inactiveTintColor: theme == "Dark" ? BaseColor.fieldColor : "#000",
		style: BaseStyle.tabBar,
		labelStyle: {
			fontSize: 12,
		},
	},
	tabBarComponent: (props) => <TabBarComponent {...props} />,
};

// Tab bar navigation
const bottomTabNavRoutes = {
	Dashboard: {
		screen: () => <DashboardNav />,
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={require("../assets/images/bottom-tab-icon1.png")}
					style={{
						width: 40,
						height: 40,
						justifyContent: "center",
						tintColor: tintColor,
					}}
				/>
			),

			tabBarOnPress: handleTabPress,
		}),
	},

	Messaging: {
		screen: MessageScreen,
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={require("../assets/images/bottom-tab-chat.png")}
					style={{
						width: 40,
						height: 40,
						justifyContent: "center",
						tintColor: tintColor,
					}}
				/>
			),
		}),
	},

	AddListing: {
		screen: AddListing,
		navigationOptions: ({ navigation }) => ({
			unmountOnBlur: true,
			resetOnBlur: true,
			// tabBarVisible: false,
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={require("../assets/images/bottom-tab-plus.png")}
					style={{
						width: 60,
						height: 60,
						justifyContent: "center",
					}}
				/>
			),
		}),
	},

	ProfileNav: {
		screen: () => <ProfileNav />,
		navigationOptions: ({ navigation }) => ({
			title: "Profile",
			// headerTransparent: true
			headerStyle: { backgroundColor: "#253542" },
			headerTitleStyle: { color: "white" },
			headerTitleAlign: "center",
			headerLeft: ({ navigation }) => {},
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={require("../assets/images/bottom-tab-profile.png")}
					style={{
						width: 40,
						height: 40,
						justifyContent: "center",
						tintColor: tintColor,
					}}
				/>
			),
		}),
	},

	Settings: {
		screen: () => <SubscriptionStack />,
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={require("../assets/images/premium-icon.png")}
					style={{
						width: 28,
						height: 28,
						justifyContent: "center",
						tintColor: tintColor,
					}}
				/>
			),
		}),
	},

	// ProductDescription: { screen: ProductDescription },
	// HelpCenter: { screen: HelpCenterCategories },
	// HelpCenterHighlights: { screen: HelpCenterHighlights },
	// HepCenterDetails: { screen: HelpCenterDetails },
};
const handleTabPress = ({ navigation, defaultHandler }) => {
	NavigationService.resetAndNavigate("BottomTabNav");
};
// Define bottom navigator as a screen in stack
const BottomTabNav = createBottomTabNavigator(
	bottomTabNavRoutes,
	bottomTabNavConfig
);
const simpleNavConfig = {
	header: null,
	headerMode: "none",
	lazy: true,
};
const simpleNavRoute = {
	AddListing: () => <AddListing />,
	AdPosted: () => <AdPosted />,
	VideoPlay: () => <VideoPlay />,
	VideoUpload: () => <VideoUpload />,
	VideoPreview: () => <VideoPreview />,
	ItemListing: () => <ItemListing />,
};

const MyTransition = {
	gestureDirection: "horizontal",
	transitionSpec: {
		open: TransitionSpecs.TransitionIOSSpec,
		close: TransitionSpecs.TransitionIOSSpec,
	},
	headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};

const SimpleNav = createStackNavigator(simpleNavRoute, simpleNavConfig);

const MainRoute = createStackNavigator(
	{
		BottomTabNav: {
			screen: BottomTabNav,
			navigationOptions: navigationOptions,
		},
		SimpleNav: {
			screen: SimpleNav,
			navigationOptions: navigationOptions,
		},
		ProfileNav: {
			screen: ProfileNav,
			navigationOptions: navigationOptions,
		},
		DashboardNav: {
			screen: DashboardNav,
			navigationOptions: navigationOptions,
		},
	},
	{
		header: null,
		headerMode: "none",
	}
);

export default MainRoute;
