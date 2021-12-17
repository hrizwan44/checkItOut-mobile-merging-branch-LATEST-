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
import Payment from "./Payment";
import PaymentDetail from "./PaymentDetail";
import PaymentDetails from "./PaymentDetails";
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
	Payment: {
		screen: Payment,
		navigationOptions: navigationOptions,
	},
	PaymentDetail: {
		screen: PaymentDetail,
		navigationOptions: navigationOptions,
	},
	PaymentDetails: {
		screen: PaymentDetails,
		navigationOptions: navigationOptions,
	},

};

const SubscriptionStack = createAppContainer(
	createStackNavigator(profileNavRoute, profileNavConfig)
);

export default SubscriptionStack;
