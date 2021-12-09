import React, { useState, useEffect, useContext } from "react";
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
  ToggleButton,
} from "../../index";
import { Picker } from "@react-native-picker/picker";
import EncryptedStorage from "react-native-encrypted-storage";
import DropDownPicker from "react-native-dropdown-picker";
import getStyles from "./style";
import { dropDownItems } from "../../../util/data";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { BaseColor } from "../../../config";
import { filter } from "lodash";
import { ThemeContext } from "../../../context/ThemeContext";
import Loader from "../../LoaderScreen";
import { map } from "lodash-es";
import API from "../../../api";
import { getAllProducts } from "../../../api/check-it-in/Product";

const filterButtons = [
  { title: "New Videos", value: "NV" },
  { title: "Most Watched", value: "MW" },
  { title: "Most Favourited", value: "MF" },
  { title: "Buy it Now", value: "BIT" },
  { title: "Bid Only", value: "BO" },
  { title: "Pick up", value: "PU" },
  { title: "Shippping", value: "S" },
];

const Marker = ({ value, styles }) => (
  <>
    {!styles ? (
      <Loader />
    ) : (
      <View
        style={{
          height: 70,
          paddingTop: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: "white",
            borderColor: "#6DF4E6",
            borderWidth: 2,
            borderRadius: 100,
          }}
        ></View>
        <Text style={styles.markerTitle}>${value}</Text>
      </View>
    )}
  </>
);

const { width, height } = Dimensions.get("window");
const Filters = (props) => {
  let params = [];
  const [condition, setCondition] = useState();
  const [brand, setBrand] = useState();
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [styles, setStyles] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [isLoading2, setIsloading2] = useState(false);
  const themeContext = useContext(ThemeContext);

  async function getfilteredProducts() {
    console.log("HIIIIIIIIIII>>>>>>>>>>>>>>>>>>>>>>")
    console.log("Nafeel Api",
      condition ? `&condition=  ${condition}` : "",
      brand ? `condition= ${brand}` : "",
      minPrice != 0 && minPrice ? "&minPrice=" + minPrice : "",
      maxPrice != 10000 ? "&maxPrice=" + maxPrice : ""
    );
    setIsloading(true);

    console.log("API CALLED: getAllProducts");
    let data = await EncryptedStorage.getItem("userData");
    data = JSON.parse(data);
    const accessToken = data.tokens.access.token;
    var config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };

    return API.get(
      `/product?sortBy=createdAt:desc
			${!params.includes("MF") ? "" : ",likes:desc"}
			${!params.includes("MW") ? "" : ",views:desc"}${condition ? `&condition=  ${condition}` : ""
      }${brand ? `condition= ${brand}` : ""}
				&limit=100&page=1${minPrice != 0 && minPrice ? "&minPrice=" + minPrice.toString() : ""
      }${maxPrice != 10000 ? "&maxPrice=" + maxPrice.toString() : ""}`
    ).then((res) => {
      console.log("Filter Result", res);


      props.setVideoData(res.data.results);
      props.setDisplayMode("default");
      setIsloading(false);
    }).catch((err) => {
      console.log("ERROR", err);
    });
  }
  const clearAllFilter = () => {
    setIsloading2(true);
    getAllProducts().then((res) => {
      console.log(res.data.results);
      props.setVideoData(res.data.results);
      props.setDisplayMode("default");
      setIsloading2(false);
    });
  };

  const rizwan = async () => {
    await console.log("Rizwan", "HIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
    getfilteredProducts();

  }

  useEffect(() => {
    setStyles(getStyles(themeContext.isDarkMode));
  }, []);
  return (

    <>
      {/* {console.log("Rizwan    >>>>>>>>>>>>>>>>> ", this.mainContainer)} */}
      {!styles ? (
        <Loader />
      ) : (
        <View style={styles.mainContainer}>
          <TitledList
            title="Filters"
            titleStyle={styles.title}
            dataList={[
              <TitledComponent
                containerStyle={styles.componentContainer1}
                title="Condition"
                titleStyle={styles.componentTitle}
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
                        setCondition(itemValue)
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
                    {/* <CustomDropDown
										itemList={dropDownItems["condition"]}
										placeholder="Select"
										style={{
											borderTopLeftRadius: 15,
											borderTopRightRadius: 15,
											borderBottomLeftRadius: 15,
											borderBottomRightRadius: 15,
										}}
										dropDownContainerStyle={styles.dropDownContainerStyle}
										handleSelected={(value) => console.log(value)}
										labelStyle={styles.labelStyle}
										listMode="MODAL"
										min={0}
										max={5}
										dropDownDirection="TOP"
									/> */}
                  </View>
                }
              />,

              <TitledComponent
                containerStyle={styles.componentContainer1}
                title="Brand"
                titleStyle={styles.componentTitle}
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
                        setBrand(itemValue)
                      }
                      style={{ borderRadius: 30, backgroundColor: "white" }}
                    >
                      {dropDownItems["brand"].map((item) => {
                        return (
                          <Picker.item label={item.label} value={item.value} />
                        );
                      })}
                    </Picker>
                  </View>
                  // <CustomDropDown
                  // 	itemList={dropDownItems["brand"]}
                  // 	placeholder="Select"
                  // 	style={{ borderRadius: 15 }}
                  // 	dropDownContainerStyle={styles.dropDownContainerStyle}
                  // 	handleSelected={(value) => console.log(value)}
                  // 	labelStyle={styles.labelStyle}
                  // 	listMode="MODAL"
                  // 	dropDownMaxHeight={300}
                  // 	zIndex={500000}
                  // />
                }
              />,
              <TitledComponent
                containerStyle={styles.componentContainer}
                title="Price"
                titleStyle={styles.componentTitle}
                valueComponent={
                  <View style={{ paddingLeft: 15 }}>
                    <MultiSlider
                      values={[0, 10000]}
                      min={0}
                      max={10000}
                      step={10}
                      isMarkersSeparated={true}
                      customMarkerLeft={(e) => {
                        setMinPrice(e.currentValue);
                        return (
                          <Marker value={e.currentValue} styles={styles} />
                        );
                      }}
                      customMarkerRight={(e) => {
                        setMaxPrice(e.currentValue);
                        return (
                          <Marker value={e.currentValue} styles={styles} />
                        );
                      }}
                      selectedStyle={{ backgroundColor: "#6DF4E6" }}
                      unselectedStyle={{ backgroundColor: "#6DF4E6" }}
                      sliderLength={width - 70}
                    />
                  </View>
                }
              />,
              <View style={styles.toggleButtonContainer}>
                {filterButtons.map((button, index) => {
                  return (
                    <ToggleButton
                      onPressState={(isActive) => {
                        if (!isActive) {
                          params.push(button.value);
                        } else {
                          params.pop(button.value);
                        }

                        console.log(params);
                      }}
                      style={styles.button}
                      textStyle={styles.buttonText}
                      activeStyle={styles.buttonActive}
                      activeTextStyle={styles.buttonTextActive}
                      title={button.title}
                    />
                  );
                })}
              </View>,
              <Button
                style={styles.premiumButton}
                styleText={styles.premiumButtonText}
                onPress={() => console.log("Filters Applied")}
              >
                Remove Advertisements (Premium)
              </Button>,
              <Button
                loading={isLoading2}
                style={styles.clearFilterButton}
                styleText={styles.clearFilterButtonText}
                onPress={clearAllFilter}
              >
                Clear Filters
              </Button>,
              <Button
                loading={isLoading}
                style={styles.applyButton}
                gradient
                gradientType="horizontalRight"
                gradientColor={["#6BEBD3", BaseColor.buttonPrimaryGradientEnd]}
                onPress={() => {
                  // console.log("Filters Applied", {
                  //   condition,
                  //   brand,
                  //   minPrice,
                  //   maxPrice,
                  // });
                  rizwan();
                }}
              >
                Apply Filters
              </Button>,
            ]}
            itemType="custom"
            containerStyle={styles.listContainer}
          />
        </View>
      )}
    </>
  );
};

export default Filters;
