import React, { useState, useEffect, useContext } from "react";
import { Text, ScrollView, View } from "react-native";
import {
  CustomTextInput,
  TitledComponent,
  Button,
  ScreenBottomThreshold,
} from "../../../../components";
import Loader from "../../../../components/LoaderScreen";
import { BaseColor } from "../../../../config";
import { ThemeContext } from "../../../../context/ThemeContext";
import getStyles from "./styles";
import { NavigationEvents } from "react-navigation";
import { retrieveData, storeData } from "../../../../util/helpers";
import { Picker } from "@react-native-picker/picker";
import { AuthContext } from "../../../../context/authContext";
import { dropDownItems } from "../../../../util/data";


const categories12 = [
  { title: "Automotive & Powersports", id: "6117a344ddda9d002130b688" },
  { title: "Baby Products", id: "6117a430ddda9d002130b689" },
  { title: "Beauty", id: "6117a471ddda9d002130b68a" },
  { title: "Books", id: "6117a488ddda9d002130b68b" },
  { title: "Camera & Photo", id: "6117a497ddda9d002130b68d" },
  { title: "Cell Phones & Accessories", id: "6117a4d6ddda9d002130b68e" },
  { title: "Clothing", id: "6117a4f2ddda9d002130b68f" },
  { title: "Collectible Coins", id: "6117a51eddda9d002130b690" },
  { title: "Consumer Electronics", id: "6117a540ddda9d002130b691" },
  { title: "Entertainment Collectibles", id: "6117a563ddda9d002130b692" },
  { title: "Fine Art", id: "6117a572ddda9d002130b693" },
  { title: "Grocery & Gourmet Food", id: "6117a58bddda9d002130b694" },
  { title: "Health & Personal Care", id: "6117a5c5ddda9d002130b695" },
  { title: "Home & Garden", id: "6117a5d7ddda9d002130b696" },
  { title: "Hotels & Resorts", id: "6117a5e4ddda9d002130b697" },
  { title: "Independent Design", id: "6117a5fcddda9d002130b698" },
  { title: "Industrial & Scientific", id: "6117a60fddda9d002130b699" },
  { title: "Major Appliances", id: "6117a61dddda9d002130b69a" },
  { title: "Music", id: "6117a62addda9d002130b69b" },
  { title: "Musical Instruments", id: "6117a63addda9d002130b69c" },
  { title: "Office Products", id: "6117a646ddda9d002130b69d" },
  { title: "Outdoors", id: "6117a653ddda9d002130b69e" },
  { title: "Personal Computers", id: "6117a66dddda9d002130b69f" },
  { title: "Pets & Pet Supplies", id: "6117a67fddda9d002130b6a0" },
  { title: "Sports", id: "6117a692ddda9d002130b6a1" },
  { title: "Sports Collectibles", id: "6117a69fddda9d002130b6a2" },
  { title: "Tools & Home Improvement", id: "6117a6b4ddda9d002130b6a3" },
  { title: "Toys & Games", id: "6117a6c4ddda9d002130b6a4" },
  { title: "Video, DVD & Blu-ray", id: "6117a6d5ddda9d002130b6a5" },
  { title: "Video Games", id: "6117a6e1ddda9d002130b6a6" },
  { title: "Watches & Jewelry", id: "6117a6f0ddda9d002130b6a7" },
];
const Details = (props) => {
  const { edit, setEdit, product, setProduct } = useContext(AuthContext);
  const [category, setCategory] = useState("6117a344ddda9d002130b688");
  const [condition, setcondition] = useState();
  const [brand, setbrand] = useState("");
  const [model, setmodel] = useState("");
  const [type, settype] = useState("");
  const [description, setdescription] = useState("");
  const [inputFocusStyle, setInputFocusStyle] = useState();
  const [tempState, setTempState] = useState(0);
  const [styles, setStyles] = useState();
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    if (edit) {
      setCategory(product.category);
      setcondition(product.condition);
      setbrand(product.brand);
      setmodel(product.model);
      settype(product.type);
      setdescription(product.description);
    }
    setStyles(getStyles(themeContext.isDarkMode));
  }, [tempState]);
  const _handleNext = () => {
    retrieveData("productData").then((data) => {
      data = { ...data, category, condition, brand, model, type, description };
      storeData("productData", data);
    });
    props.jumpTo(3);
  };

  console.log("Nafeel___", product)
  return (
    <>
      {!styles ? (
        <Loader />
      ) : (
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.container}
          >
            <NavigationEvents
              onDidFocus={(payload) => setTempState(tempState + 1)}
            />
            <TitledComponent
              containerStyle={styles.detailContainer}
              title="Category"
              titleStyle={styles.title}
              valueComponent={
                <View
                  style={{
                    borderRadius: 15,
                    borderWidth: 1,
                    // borderColor: "#bdc3c7",
                    overflow: "hidden",
                    // borderBottomWidth: 1,
                  }}
                >
                  <Picker
                    selectedValue={category}
                    onValueChange={(itemValue, itemIndex) =>
                      setCategory(itemValue)
                    }
                    style={{
                      borderRadius: 30,
                      backgroundColor: "white",
                    }}
                  >
                    {categories12.map((item) => {
                      return <Picker.item label={item.title} value={item.id} />;
                    })}
                  </Picker>
                </View>
              }
            />

            <TitledComponent
              containerStyle={styles.detailContainer}
              title="Condition (Required)"
              titleStyle={styles.title}
              placeholderTextColor="gray"
              valueComponent={
                <View
                  style={{
                    borderRadius: 15,
                    borderWidth: 1,
                    // borderColor: "#bdc3c7",
                    overflow: "hidden",
                  }}
                >
                  <Picker
                    selectedValue={condition}
                    onValueChange={(itemValue, itemIndex) =>
                      setcondition(itemValue)
                    }
                    style={{
                      borderRadius: 30,
                      backgroundColor: "white",
                    }}
                  >
                    {dropDownItems["condition"].map((item) => {
                      return (
                        <Picker.item label={item.label} value={item.value} />
                      );
                    })}
                  </Picker>
                  {/* // <CustomTextInput
							// 	style={styles.textInput}
							// 	placeholder="Used"
							// 	inputStyle={{
							// 		paddingLeft: 10,
							// 		fontSize: 17,
							// 		borderRadius: 10,
							// 		fontFamily: "Sogoe UI",
							// 		width: "100%",
							// 	}}
							// 	value={condition}
							// 	onChangeText={(text) => setcondition(text)}
							// /> */}
                </View>
              }
            />
            <TitledComponent
              containerStyle={styles.detailContainer}
              title="Brand"
              titleStyle={styles.title}
              valueComponent={
                <View
                  style={{
                    borderRadius: 15,
                    borderWidth: 1,
                    // borderColor: "#bdc3c7",
                    overflow: "hidden",
                  }}
                >
                  <Picker
                    selectedValue={brand}
                    onValueChange={(itemValue, itemIndex) =>
                      setbrand(itemValue)
                    }
                    style={{ borderRadius: 30, backgroundColor: "white" }}
                  >
                    {dropDownItems["brand"].map((item) => {
                      return (
                        <Picker.item label={item.label} value={item.value} />
                      );
                    })}
                  </Picker>
                  {/* // <CustomTextInput
                //   style={styles.textInput}
                //   placeholder="Vehicles and Transport"
                //   placeholderTextColor="gray"
                //   inputStyle={{
                //     paddingLeft: 10,
                //     fontSize: 17,
                //     borderRadius: 10,
                //     fontFamily: "Sogoe UI",
                //     width: "100%",
                //   }}
                //   value={brand}
                //   onChangeText={(text) => setbrand(text)}
                // /> */}
                </View>
              }
            />
            <TitledComponent
              containerStyle={styles.detailContainer}
              title="Model"
              titleStyle={styles.title}
              valueComponent={
                <CustomTextInput
                  style={styles.textInput}
                  placeholder="Vehicles and Transport"
                  placeholderTextColor="gray"
                  inputStyle={{
                    paddingLeft: 10,
                    fontSize: 17,
                    borderRadius: 10,
                    fontFamily: "Sogoe UI",
                    width: "100%",
                  }}
                  value={model}
                  onChangeText={(text) => setmodel(text)}
                />
              }
            />
            <TitledComponent
              containerStyle={styles.detailContainer}
              title="Type (optional)"
              titleStyle={styles.title}
              valueComponent={
                <CustomTextInput
                  style={styles.textInput}
                  placeholder="Vehicles and Transport"
                  placeholderTextColor="gray"
                  inputStyle={{
                    // marginLeft: 0.5,
                    paddingLeft: 10,
                    fontSize: 17,
                    borderRadius: 10,
                    fontFamily: "Sogoe UI",
                    width: "100%",
                  }}
                  value={type}
                  onChangeText={(text) => settype(text)}
                />
              }
            />
            <TitledComponent
              containerStyle={styles.multilineDetailContainer}
              title="Description (optional)"
              titleStyle={styles.title}
              valueComponent={
                <CustomTextInput
                  style={styles.multilineTextInput}
                  autoCorrect={false}
                  // placeholder="Add a note (optional)"
                  inputStyle={{
                    paddingTop: 10,
                    paddingLeft: 10,
                    fontSize: 14,
                    borderRadius: 17,
                    fontFamily: "Sogoe UI",
                    width: "100%",
                  }}
                  multiline
                  numberOfLines={40}
                  textAlignVertical="top"
                  value={description}
                  onChangeText={(text) => setdescription(text)}
                />
              }
            />
            <Button
              style={styles.nextButton}
              gradient
              gradientType="horizontalRight"
              gradientColor={[
                BaseColor.buttonPrimaryGradientStart,
                BaseColor.buttonPrimaryGradientEnd,
              ]}
              onPress={_handleNext}
            >
              Next
					</Button>
            <ScreenBottomThreshold />
          </ScrollView>
        )}
    </>
  );
};

export default Details;
