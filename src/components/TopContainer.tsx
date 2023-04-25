import React from "react";
import { View, StyleSheet, Image, Dimensions, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import logo from "../assets/logo.png";
import { useAtom } from "jotai";
import { isButtonPressedAtom, userStepAtom } from "../utils/store";

const TopContainer = ({
  goBackToQuestion,
}: {
  goBackToQuestion?: () => void;
}) => {
  const [isButtonPressed, setIsButtonPressed] = useAtom(isButtonPressedAtom);
  const [userStep, setUserStep] = useAtom(userStepAtom);

  const backToPreviousStep = () => {
    setIsButtonPressed(true);
    setTimeout(() => {
      setUserStep((previousStep) => previousStep - 1);
      setIsButtonPressed(false);
    }, 50);
  };

  return (
    <View style={styles.topContainer}>
      {/* Bouton back */}
      <Pressable
        style={{
          ...styles.containerBackIcons,
          backgroundColor: isButtonPressed ? "#D9D9D9" : "#6892FF",
          opacity: userStep !== 0 ? 1 : 0,
        }}
        onPress={() =>
          goBackToQuestion ? goBackToQuestion : backToPreviousStep()
        }
      >
        <Ionicons
          name="arrow-back-outline"
          size={Dimensions.get("window").width * 0.08}
          color="white"
        />
      </Pressable>
      {/* Logo */}
      <View style={styles.logo}>
        <Image
          source={logo}
          style={{
            width: (Dimensions.get("window").width * 0.4) / 1.5,
            height: (Dimensions.get("window").width * 0.4) / 1.5 / 2,
          }}
        />
      </View>
      {/*Bouton stop */}
      <Pressable
        style={{
          ...styles.containerBackIcons,
          opacity: 0,
        }}
      >
        <Ionicons
          name="close-outline"
          size={Dimensions.get("window").width * 0.1}
          color="white"
        />
      </Pressable>
    </View>
  );
};

export default TopContainer;

const styles = StyleSheet.create({
  topContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  containerBackIcons: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width * 0.12,
    height: Dimensions.get("window").width * 0.12,
    borderRadius: 100,
  },
  logo: {
    width: Dimensions.get("window").width * 0.4,
    height: (Dimensions.get("window").width * 0.4) / 2,
    borderBottomEndRadius: 300,
    borderBottomStartRadius: 300,
    backgroundColor: "#D9D9D9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
