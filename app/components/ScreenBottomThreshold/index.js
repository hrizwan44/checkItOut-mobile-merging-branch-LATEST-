import React from 'react'
import { View, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export default ({height}) => <View style={{width: width, height: height || 40}}/>