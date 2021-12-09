import React, { useEffect } from "react";
import {
	createStackNavigator,
	CardStyleInterpolators,
	TransitionSpecs,
	HeaderStyleInterpolators,
	TransitionPresets,
} from "react-navigation-stack";
import { createAppContainer, withNavigationFocus } from "react-navigation";
import Dashboard from "../Dashboard/index";
import OthersProfile from "../profile/others-profile/index";
import ProductDescription from "../check-it-out/ProductDescription/index";
const profileNavConfig = {
	headerMode: "none",
};
const navigationOptions = {
	title: "ProfileSettings",
	transitionSpec: {
		open: TransitionSpecs.FadeOutToBottomAndroidSpec,
		close: TransitionSpecs.FadeOutToBottomAndroidSpec,
	},
	cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
	headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};
const profileNavRoute = {
	Dashboard: {
		screen: Dashboard,
		navigationOptions: navigationOptions,
	},
	OthersProfile: {
		screen: OthersProfile,
		navigationOptions: navigationOptions,
	},
	ProductDescription: {
		screen: ProductDescription,
		navigationOptions: navigationOptions,
	},
};

const DashboardNav = createAppContainer(
	createStackNavigator(profileNavRoute, profileNavConfig)
);

export default DashboardNav;
