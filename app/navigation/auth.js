import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import {
	createStackNavigator,
	CardStyleInterpolators,
	TransitionSpecs,
	HeaderStyleInterpolators,
	TransitionPresets,
} from "react-navigation-stack";
import ChangeLanguage from "../screens/ChangeLanguage";
import ForgotPassword from "../screens/ForgotPassword";
import ForgotPasswordMobile from "../screens/ForgotPasswordMobile";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Main2 from "../screens/Main-2";
import SignUpMobile from "../screens/SignUpMobile";
import SignInMobile from "../screens/SignInMobile";
import CustomSideBarMenu from "./CustomSideBarMenu";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/auth";
import Otp from "../screens/Otp";
import ChangePassword from "../screens/profile/changePassword";
import ResetPassordMobile from "../screens/ResetPassword";

const navigationOptions = {
	title: "ProfileSettings",
	transitionSpec: {
		open: TransitionSpecs.FadeOutToBottomAndroidSpec,
		close: TransitionSpecs.FadeOutToBottomAndroidSpec,
	},
	cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
	headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};
const AuthStack = createStackNavigator(
	{
		AuthHome: {
			screen: Home,
			navigationOptions: navigationOptions,
		},
		SignIn: {
			screen: SignIn,
			navigationOptions: navigationOptions,
		},
		ResetPassordMobile: {
			screen: ResetPassordMobile,
			navigationOptions: navigationOptions,
		},

		SignInMobile: {
			screen: SignInMobile,
			navigationOptions: navigationOptions,
		},
		SignUp: {
			screen: SignUp,
			navigationOptions: navigationOptions,
		},
		SignUpMobile: {
			screen: SignUpMobile,
			navigationOptions: navigationOptions,
		},
		ForgotPassword: {
			screen: ForgotPassword,
			navigationOptions: navigationOptions,
		},
		Main2: {
			screen: Main2,
			navigationOptions: navigationOptions,
		},
		Otp: {
			screen: Otp,
			navigationOptions: navigationOptions,
		},
		ForgotPasswordMobile: {
			screen: ForgotPasswordMobile,
			navigationOptions: navigationOptions,
		},
		ChangePassword: {
			screen: ChangePassword,
			navigationOptions: navigationOptions,
		},
	},
	{
		initialRouteName: "AuthHome",
		mode: "modal",
		headerMode: "none",
	}
);

export default AuthStack;
