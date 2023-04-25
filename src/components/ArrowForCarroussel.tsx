import React from "react";
import { View, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ArrowForCarroussel = ({ goNext, goBefore }: any) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        transform: [{ translateY: -Dimensions.get("window").height * 0.02 }],
      }}
    >
      <Ionicons
        name="caret-forward-outline"
        size={Dimensions.get("window").width * 0.06}
        style={{
          position: "relative",
          display: "flex",
          transform: [{ rotate: "180deg" }],
        }}
        color="#6EC36C"
        onPress={() => goBefore()}
      />
      <Ionicons
        name="caret-forward-outline"
        size={Dimensions.get("window").width * 0.06}
        style={{ position: "relative", display: "flex" }}
        color="#6EC36C"
        onPress={() => goNext()}
      />
    </View>
  );
};

export default ArrowForCarroussel;
