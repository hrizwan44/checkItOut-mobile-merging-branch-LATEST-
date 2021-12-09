import React, { useEffect, useState, useContext } from "react";

import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
  TouchableHighlight,
  Modal,
} from "react-native";
// import { Text } from "../../components";
import { Button } from "../../../components";
import Header from "../../../components/Header";
import { BaseColor } from "../../../config";
import getStyles from "./styles";
import Arrow from "../../../assets/icons/Arrow.svg";
import ArrowCard from "../../../assets/icons/ArrowCard.svg";
import { TouchableOpacity } from "react-native";
import LinkCard from "../../../components/ProfileDetail/LinkCard";
import PlusIcon from "../../../assets/icons/PlusIcon.svg";
import HeartIcon from "../../../assets/icons/heartIcon.svg";
import SavedItemsModal from "../saveItemModal/index";
import { ThemeContext } from "../../../context/ThemeContext";
import { AuthContext } from "../../../context/authContext";

import { likeProduct, getSaveUserProducts, createFolder } from "../../../api/check-it-in/Product";


import config from "react-native-config";
const axios = require("axios");
const Api = axios.create();
const backendServer = config.BACKEND_SERVER;
const routeBase = "v1";
const SavedItems = (props) => {
  const themeContext = useContext(ThemeContext);
  const { userSession, setUserSession } = useContext(AuthContext);
  const [theme, setTheme] = useState(themeContext.isDarkMode);
  const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
  const [user, setUser] = useState({
    title: "Dax Hunter",
    phone: "03110110335",
    email: "daxhunter110@gmail.com",
  });
  const [addModal, setAddModal] = useState(false);
  const [savedItemsCount, setSavedItemsCount] = useState();

  const [allSavedFolders, setAllSavedFolders] = useState([]);



  const hideAddModal = () => {
    setAddModal(false);
  };
  const hideSubModal = (folderName) => {
    let data = {
      title: folderName
    }
    createFolder(data).then((res) => {
      console.log("Get Saved", res.data);
      // this.setState({ saved: !this.state.saved });
      _getSavedImages(1)
      setAddModal(false);
    });
  }
  useEffect(() => {
    setStyles(getStyles(themeContext.isDarkMode));
    setTheme(themeContext.isDarkMode);
    // `_getSavedImages`();
    _getSavedImages(1)
  }, []);
  const _getSavedImages = (page) => {
    getSaveUserProducts(page).then((res) => {
      console.log("Get Saved", res.data);
      setAllSavedFolders(res.data.results)
      // this.setState({ saved: !this.state.saved });
    });
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title="Saved Items"
        titleStyle={styles.headerTitle}
        whiteColor
        styleRight={{ paddingBottom: 12 }}
        style={styles.header}
        renderLeft={() => {
          return <Arrow />;
        }}
        onPressLeft={() => {
          props.navigation.goBack(null);
        }}
        renderRight={() => {
          return <PlusIcon />;
        }}
        onPressRight={() => {
          setAddModal(true);
        }}
      />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 70, height: "100%" }}
        contentContainerStyle={{ height: "100%" }}
      >
        <View style={styles.cardMainContainer}>
          {
            allSavedFolders.length > 0 && allSavedFolders.map((val) => {
              return (
                <>
                  {
                    val.isDefaultFolder == true ?
                      <View style={styles.cardContainer}>
                        <TouchableOpacity
                          onPress={() => props.navigation.navigate("SavedImages", {
                            item: val
                          })}
                          style={styles.cardSecondaryContainer}
                        >
                          <HeartIcon />
                          <Text style={styles.itemText}>{val?.count} items</Text>
                        </TouchableOpacity>
                        <Text style={styles.cardTitle}>{val?.title}</Text>
                      </View>
                      :
                      <View style={styles.cardContainer}>
                        <TouchableOpacity
                          onPress={() => props.navigation.navigate("SavedImages", {
                            item: val
                          })}
                          style={styles.cardSecondaryContainer}
                        >
                          <HeartIcon />
                          <Text style={styles.itemText}>{val?.count} items</Text>
                        </TouchableOpacity>
                        <Text style={styles.cardTitle}>{val?.title}</Text>
                      </View>
                  }
                </>
              )
            })
          }

          {/* <View style={styles.cardContainer}>
						<TouchableOpacity
							onPress={() => props.navigation.navigate("SavedImages")}
							style={styles.cardSecondaryContainer}
						>
							<Image
								source={require("../../../assets/images/pic.png")}
								style={{
									height: "100%",
									width: "110%",
									overflow: "hidden",
									borderRadius: 26,
								}}
							/>
							<Text style={styles.itemText}>O items</Text>
						</TouchableOpacity>
						<Text style={styles.cardTitle}>Cars</Text>
					</View> */}

          {/* <View style={styles.cardContainer}>
						<TouchableOpacity style={styles.cardSecondaryContainer}>
							<Image
								source={require("../../../assets/images/pic.png")}
								style={{
									height: "100%",
									width: "110%",
									overflow: "hidden",
									borderRadius: 26,
								}}
							/>
							<Text style={styles.itemText}>O items</Text>
						</TouchableOpacity>
						<Text style={styles.cardTitle}>Cars</Text>
					</View>
					<View style={styles.cardContainer}>
						<TouchableOpacity style={styles.cardSecondaryContainer}>
							<Image
								source={require("../../../assets/images/pic.png")}
								style={{
									height: "100%",
									width: "110%",
									overflow: "hidden",
									borderRadius: 26,
								}}
							/>
							<Text style={styles.itemText}>O items</Text>
						</TouchableOpacity>
						<Text style={styles.cardTitle}>Cars</Text>
					</View> */}

        </View>
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={addModal}
        onRequestClose={() => { }}
      >
        <SavedItemsModal
          handleSubmit={hideSubModal}
          hideAddModal={hideAddModal}
        />
      </Modal>
    </SafeAreaView>
  );
};
export default SavedItems;
