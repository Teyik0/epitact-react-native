import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useRef } from "react";
import {
  Navbar,
  Questions,
  StartQuestions,
  TopContainer,
  Next,
} from "../components";
import { productsTendiniteDeQuervain } from "../utils/data";
import { useAtom } from "jotai";
import { answerAtom, userStepAtom } from "../utils/store";

const TendiniteDeQuervain = ({ navigation }: any) => {
  const [userStep, setUserStep] = useAtom(userStepAtom);
  const [answer] = useAtom(answerAtom);
  useEffect(() => {
    setUserStep(0);
  }, []);
  const scrollRef = useRef<ScrollView>(null);

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={styles.bigCircle} />
      <View style={styles.littleCircle} />

      <TopContainer />

      {userStep === 0 && <StartQuestions />}
      {/* QUESTIONNAIRE */}
      {userStep >= 1 && (
        <ScrollView
          ref={scrollRef}
          onContentSizeChange={() =>
            scrollRef.current?.scrollToEnd({ animated: true })
          }
        >
          {userStep >= 1 && (
            <Questions
              question="Pour quel moment ?"
              ans1="Pendant les activités manuelles"
              ans2="Pour le repos"
              step={1}
            />
          )}
          {userStep >= 2 && answer.q1 === 1 && (
            <Next
              navigation={navigation}
              product={productsTendiniteDeQuervain.quervActiv}
            />
          )}
          {userStep >= 2 && answer.q1 === 2 && (
            <Next
              navigation={navigation}
              product={productsTendiniteDeQuervain.quervImmo}
            />
          )}
          <View style={{ height: Dimensions.get("window").height / 5 }}></View>
        </ScrollView>
      )}
      <Navbar navigation={navigation} navPath="Home" />
    </View>
  );
};

export default TendiniteDeQuervain;

const styles = StyleSheet.create({
  bigCircle: {
    width: Dimensions.get("window").height * 0.6,
    height: Dimensions.get("window").height * 0.6,
    borderRadius: 1000,
    backgroundColor: "#6892FF",
    opacity: 0.4,
    position: "absolute",
    top: Dimensions.get("window").height * 0.12,
    right: Dimensions.get("window").width * 0.12,
    left: -150,
    zIndex: -1,
  },
  littleCircle: {
    width: Dimensions.get("window").height * 0.45,
    height: Dimensions.get("window").height * 0.45,
    borderRadius: 1000,
    backgroundColor: "#6EC36C",
    opacity: 0.3,
    position: "absolute",
    top: Dimensions.get("window").height * 0.48,
    right: -200,
  },
});
