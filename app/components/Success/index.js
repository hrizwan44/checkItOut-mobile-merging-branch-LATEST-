import React from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "../Icon";
import Text from "../Text";
import styles from "./styles";
const Success = ({ message }) => {
  return (
    <View
      style={{
        maxWidth: "100%",
        marginTop: "5%",
        width: "100%",
      }}
    >
      <LinearGradient
        colors={["#058B48", "#D8F6E7"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: 5 }}
      >
        <View
          style={[styles.registerButtonStyle, { backgroundColor: "#D8F6E7" }]}
        >
          <Icon
            name="circle-thin"
            color="green"
            iconFamily="FontAwesome"
            size={20}
            style={{ marginRight: "3%" }}
          />
          <Text footnote>{message}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Success;
