import React from "react";
import {
	createStackNavigator,
	CardStyleInterpolators,
	TransitionSpecs,
	HeaderStyleInterpolators,
	TransitionPresets,
} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Profile from "./index";
import ProfileSettings from "./profileSetting";
import EditName from "./editName";
import HelpCenterCategories from "../general/help-center";
import OthersProfile from "./others-profile";
import EditNumber from "./editNumber";
import EditEmail from "./editEmail";
import ChangePassword from "./changePassword";
import Location from "./Location";
import PushNotification from "./PushNotification";
import EmailNotification from "./emailNotification";
import SavedItems from "./savedItems";
import SavedImages from "./saveImages";
import Subscription from "./subscription";
import GoldSubscription from "./GoldSubscription";
import StandardSubscription from "./StandardSubscription";
import VerifyAccount from "./verifyAccount";
import SavedAlerts from "./savedAlerts";
import Otp from "../Otp";
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
	initialRouteName: "Profile",
	header: null,
	headerMode: "none",
	lazy: true,
};

const profileNavRoute = {
	Profile: {
		screen: Profile,
		navigationOptions: navigationOptions,
	},
	ProfileSettings: {
		screen: ProfileSettings,
		navigationOptions: navigationOptions,
	},
	EditName: {
		screen: EditName,
		navigationOptions: navigationOptions,
	},
	HelpCenterCategories: {
		screen: HelpCenterCategories,
		navigationOptions: navigationOptions,
	},
	OthersProfile: {
		screen: OthersProfile,
		navigationOptions: navigationOptions,
	},
	EditNumber: {
		screen: EditNumber,
		navigationOptions: navigationOptions,
	},
	EditEmail: {
		screen: EditEmail,
		navigationOptions: navigationOptions,
	},
	ChangePassword: {
		screen: ChangePassword,
		navigationOptions: navigationOptions,
	},
	Location: {
		screen: Location,
		navigationOptions: navigationOptions,
	},
	PushNotification: {
		screen: PushNotification,
		navigationOptions: navigationOptions,
	},
	EmailNotification: {
		screen: EmailNotification,
		navigationOptions: navigationOptions,
	},
	SavedItems: {
		screen: SavedItems,
		navigationOptions: navigationOptions,
	},
	SavedImages: {
		screen: SavedImages,
		navigationOptions: navigationOptions,
	},
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
	VerifyAccount: {
		screen: VerifyAccount,
		navigationOptions: navigationOptions,
	},
	SavedAlerts: {
		screen: SavedAlerts,
		navigationOptions: navigationOptions,
	},
	Otp: {
		screen: Otp,
		navigationOptions: navigationOptions,
	},
};

const ProfileNav = createAppContainer(
	createStackNavigator(profileNavRoute, profileNavConfig)
);

export default ProfileNav;
