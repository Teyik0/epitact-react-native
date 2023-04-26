import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import {
  Navbar,
  Questions,
  StartQuestions,
  TopContainer,
  Next,
} from "../components";
import { productsCors } from "../utils/data";
import { answerAtom, userStepAtom } from "../utils/store";
import { useAtom } from "jotai";

const Cors = ({ navigation }: any) => {
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
              question="De quoi nécessitez vous ?"
              ans1="Corriger la déformation des orteils"
              ans2="Répartir les pressions"
              step={1}
            />
          )}
          {userStep >= 2 && answer.q1 === 1 && (
            <Next
              navigation={navigation}
              product={productsCors.barrettesSousDiaphysaires}
            />
          )}
          {userStep >= 2 && answer.q1 === 2 && (
            <Questions
              question="Où se situe votre douleur précisément ?"
              ans1="Cors situé sur le dessus de l'orteil"
              ans2="Cors situé à l'extrémité de l'orteil"
              ans3="Hématome sous l'ongle pendant la pratique sportive"
              step={2}
            />
          )}
          {userStep >= 2 && answer.q1 === 2 && answer.q2 === 2 && (
            <Next navigation={navigation} product={productsCors.doigtiers} />
          )}
          {userStep >= 2 && answer.q1 === 2 && answer.q2 === 3 && (
            <Next
              navigation={navigation}
              product={productsCors.protectionsOnglesBleusSport}
            />
          )}
          {userStep >= 3 && answer.q1 === 2 && answer.q2 === 1 && (
            <Questions
              question="Pouvez-vous nous donner plus de détails ?"
              ans1="Plusieurs orteils sont concernés"
              ans2="Un seul orteil concerné"
              ans3="Non associées à des douleurs plantaires"
              step={3}
            />
          )}
          {userStep >= 4 &&
            answer.q1 === 2 &&
            answer.q2 === 1 &&
            answer.q3 === 1 && (
              <Next
                navigation={navigation}
                product={productsCors.protegePointesOrteils}
              />
            )}
          {userStep >= 4 &&
            answer.q1 === 2 &&
            answer.q2 === 1 &&
            answer.q3 === 2 && (
              <Next navigation={navigation} product={productsCors.digitubes} />
            )}
          {userStep >= 4 &&
            answer.q1 === 2 &&
            answer.q2 === 1 &&
            answer.q3 === 3 && (
              <Next
                navigation={navigation}
                product={productsCors.separateurs}
              />
            )}
          <View style={{ height: Dimensions.get("window").height / 5 }}></View>
        </ScrollView>
      )}
      <Navbar navigation={navigation} navPath="Home" />
    </View>
  );
};

export default Cors;

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
