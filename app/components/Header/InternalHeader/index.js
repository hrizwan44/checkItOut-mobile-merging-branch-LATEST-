import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Dimensions, BackHandler } from "react-native";
import {
  Button,
  CustomTextInput,
  Error,
  Header,
  Icon,
  CustomDropDown,
  TitledList,
  TitledComponent,
  Filters,
} from "../..";
import {
  BaseColor,
  BaseStyle,
  PurpleColor,
  YellowColor,
} from "../../../config";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";
import getStyles from "./styles";
import { TouchableOpacity } from "react-native";
import NavigationService from "../../../navigation/NavigationService";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";
import Loader from "../../LoaderScreen";
const InternalHeader = ({
  containerStyle,
  title,
  titleStyle,
  leftIcon,
  rightIcon,
  background,
  handleLeft,
  handleRight,
}) => {
  const [styles, setStyles] = useState();
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    setStyles(getStyles(themeContext.isDarkMode));
  }, []);
  return (
    <>
      {!styles ? (
        <Loader />
      ) : (
        <View
          style={[
            styles.container,
            containerStyle,
            {backgroundColor: background}
          ] || [
            styles.container,
            containerStyle
          ]}
        >
          <TouchableOpacity style={styles.leftIcon} onPress={handleLeft}>
            {leftIcon}
          </TouchableOpacity>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <TouchableOpacity onPress={handleRight} style={styles.rightIcon}>
            {rightIcon}
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default InternalHeader;
