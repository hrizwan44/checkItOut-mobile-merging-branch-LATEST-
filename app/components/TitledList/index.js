import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import {
  View,
  FlatList,
  Dimensions,
  BackHandler,
  ScrollView
} from "react-native";
import { Button, Text, CustomTextInput, Error, Header, Icon } from "../index";
import styles from "./style";

const TitledList = ({ title, titleStyle, dataList, itemStyle, itemType, label,
   value, _handleItemPress, containerStyle }) => {
  return (
    <View style={containerStyle || styles.container}>
      <Text title2 style={titleStyle || styles.title}>
        {title}
      </Text>
      <FlatList
        data={dataList}
        renderItem={({item, index }) => {
          if (itemType == "touchable"){
            return <TouchableOpacity onPress={() => _handleItemPress(item[value])}>
              <Text key={index} style={itemStyle || styles.item}>{item[label]}</Text>
            </TouchableOpacity>
          }
          return item          
        }}
      />
    </View>
  );
};

export default TitledList;
