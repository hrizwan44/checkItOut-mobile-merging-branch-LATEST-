import React from "react";
import {
	createStackNavigator,
	CardStyleInterpolators,
	TransitionSpecs,
	HeaderStyleInterpolators,
	TransitionPresets,
} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import VideoUpload from ".";
import VideoPreview from "./VideoPreview";
import AddVideoMain from "../add-listing/Main";
import ItemListing from "../item-listing";
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
	animationEnabled: true,
	...navigationOptions,
};

const profileNavRoute = {
	VideoUpload: {
		screen: VideoUpload,
		navigationOptions: navigationOptions,
	},
	VideoPreview: {
		screen: VideoPreview,
		navigationOptions: navigationOptions,
	},
	AddVideoMain: {
		screen: AddVideoMain,
		navigationOptions: navigationOptions,
	},
	ItemListing: {
		screen: ItemListing,
		navigationOptions: navigationOptions,
	},
	CheckItIn: {
		screen: CheckItIn,
		navigationOptions: navigationOptions,
	},
};

const VideoNav = createAppContainer(
	createStackNavigator(profileNavRoute, profileNavConfig)
);

export default VideoNav;
