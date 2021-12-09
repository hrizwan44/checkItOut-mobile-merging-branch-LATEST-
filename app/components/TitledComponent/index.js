import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Dimensions,
  BackHandler,
  ScrollView,
} from "react-native";
import { Button, Text, CustomTextInput, Error, Header, Icon } from "../index";
import styles from "./style";

const TitledComponent = ({
  containerStyle,
  titleContainerStyle,
  title,
  subTitle,
  titleStyle,
  subTitleStyle,
  valueComponent,
  labelDistance,
  leftIcon,
  rightIcon,
}) => {
  return (
    <View style={containerStyle || styles.container}>
      <View style={titleContainerStyle || styles.titleContainer}>
        {leftIcon}
        <Text
          style={
            [titleStyle, { flex: 2 }] || [
              styles.title,
              { marginBottom: labelDistance, flex: 2 },
            ]
          }
        >
          {title}
        </Text>
        {rightIcon}
      </View>
      <View>{valueComponent}</View>
      <Text style={subTitleStyle || styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default TitledComponent;
