import React from "react";
import {
	createStackNavigator,
	CardStyleInterpolators,
	TransitionSpecs,
	HeaderStyleInterpolators,
	TransitionPresets,
} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Subscription from "../subscription";
import GoldSubscription from "../GoldSubscription";
import StandardSubscription from "../StandardSubscription";
const navigationOptions = {
	title: "ProfileSettings",
	transitionSpec: {
		open: TransitionSpecs.FadeOutToBottomAndroidSpec,
		close: TransitionSpecs.FadeOutToBottomAndroidSpec,
	},
	cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
	headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};
const profileNavConfig = {
	initialRouteName: "Subscription",
	header: null,
	headerMode: "none",
	lazy: true,
};

const profileNavRoute = {
	Subscription: {
		screen: Subscription,
		navigationOptions: navigationOptions,
	},
	GoldSubscription: {
		screen: GoldSubscription,
		navigationOptions: navigationOptions,
	},
	StandardSubscription: {
		screen: StandardSubscription,
		navigationOptions: navigationOptions,
	},
};

const SubscriptionStack = createAppContainer(
	createStackNavigator(profileNavRoute, profileNavConfig)
);

export default SubscriptionStack;
