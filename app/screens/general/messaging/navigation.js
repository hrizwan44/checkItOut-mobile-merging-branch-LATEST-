import {
    createStackNavigator,
    CardStyleInterpolators,
    TransitionSpecs,
    HeaderStyleInterpolators,
    TransitionPresets,
} from "react-navigation-stack";
import { createAppContainer, withNavigationFocus } from "react-navigation";

import MessagingScreen from './index'
import Bids from "./Bids";



const profileNavConfig = {
    headerMode: "none",
};
const navigationOptions = {
    // title: "ProfileSettings",
    transitionSpec: {
        open: TransitionSpecs.FadeOutToBottomAndroidSpec,
        close: TransitionSpecs.FadeOutToBottomAndroidSpec,
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};
const messagingNavRoute = {
    Messaging: {
        screen: MessagingScreen,
        navigationOptions: navigationOptions,
    },
    BidScreen: {
        screen: Bids,
        navigationOptions: navigationOptions,
    },


};

const MessagingNav = createAppContainer(
    createStackNavigator(messagingNavRoute, profileNavConfig)
);

export default MessagingNav;
