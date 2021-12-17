import React, { useEffect, useState, useContext } from "react";

import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
// import { Text } from "../../components";
import { Button } from "../../../../components";
import { BaseColor } from "../../../../config";
import getStyles from "./styles";


import { TouchableOpacity } from "react-native";

import Cross from "../../../../assets/icons/CrossModal.svg";
import { ThemeContext } from "../../../../context/ThemeContext";

const SelectFolderModel = (props) => {
  const themeContext = useContext(ThemeContext);
  const [theme, setTheme] = useState(themeContext.isDarkMode);
  const [styles, setStyles] = useState(getStyles(themeContext.isDarkMode));
  const [folderName, setFolderName] = useState('');

  const [user, setUser] = useState({
    title: "Dax Hunter",
    phone: "03110110335",
    email: "daxhunter110@gmail.com",
  });

  useEffect(() => {
    console.log("Edit");
    setStyles(getStyles(themeContext.isDarkMode));
    setTheme(themeContext.isDarkMode);
  }, []);

  const createButtonFun = (id) => {
    props.handleSubmit(id)
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardMainContainer}>
        <TouchableOpacity
          onPress={props.hideAddModal}
          style={{ marginTop: "5%", marginRight: "5%", alignSelf: "flex-end" }}
        >
          <Cross />
        </TouchableOpacity>
        <View style={styles.cardContainer}>

          {
            props.showSelectData.map((val) => {
              return (
                <>
                  <View
                    style={{
                      width: "80%",
                      paddingTop: "15%",
                      alignSelf: "center",
                    }}
                  >
                    <Button
                      style={styles.createButton}
                      gradient
                      gradientType="horizontalRight"
                      gradientColor={[
                        BaseColor.buttonPrimaryGradientStart,
                        BaseColor.buttonPrimaryGradientEnd,
                      ]}
                      // disabled={!(formik.isValid && formik.dirty && !isLoading)}
                      onPress={() => createButtonFun(val?._id)}
                    >
                      {val?.title}
                    </Button>
                  </View>
                </>
              )
            })


          }
        </View>
      </View>
    </View>
  );
};
export default SelectFolderModel;
