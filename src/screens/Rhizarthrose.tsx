import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useRef } from "react";
import {
  Navbar,
  Questions,
  StartQuestions,
  TopContainer,
  Next,
} from "../components";
import { productsRhizarthrose } from "../utils/data";
import { answerAtom, userStepAtom } from "../utils/store";
import { useAtom } from "jotai";

const Rhizarthrose = ({ navigation }: any) => {
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
              question="Quel est votre besoin ?"
              ans1="Préserver l'articulation durant les activités manuelles"
              ans2="Limiter les micro-mouvements traumatisants"
              ans3="Maintenir le pouce au repos"
              step={1}
            />
          )}
          {userStep >= 2 && answer.q1 === 1 && (
            <Next
              navigation={navigation}
              product={productsRhizarthrose.soupleActivite}
            />
          )}
          {userStep >= 2 && answer.q1 === 2 && (
            <Questions
              question="Pour quel utilisation ?"
              ans1="En journée durant les activités"
              ans2="La nuit"
              ans3="Au repos"
              step={2}
            />
          )}
          {userStep >= 3 && answer.q1 === 2 && answer.q2 === 1 && (
            <Next
              navigation={navigation}
              product={productsRhizarthrose.soupleActivite}
            />
          )}
          {userStep >= 3 && answer.q1 === 2 && answer.q2 === 2 && (
            <Next
              navigation={navigation}
              product={productsRhizarthrose.thermoformable}
            />
          )}
          {userStep >= 3 && answer.q1 === 2 && answer.q2 === 3 && (
            <Next
              navigation={navigation}
              product={productsRhizarthrose.rigideDeRepos}
            />
          )}
          {userStep >= 2 && answer.q1 === 3 && (
            <Questions
              question="Pour quel utilisation ?"
              ans1="La nuit"
              ans2="La journée"
              step={2}
            />
          )}
          {userStep >= 3 && answer.q1 === 3 && answer.q2 === 1 && (
            <Next
              navigation={navigation}
              product={productsRhizarthrose.thermoformable}
            />
          )}
          {userStep >= 3 && answer.q1 === 3 && answer.q2 === 2 && (
            <Next
              navigation={navigation}
              product={productsRhizarthrose.rigideDeRepos}
            />
          )}
          <View style={{ height: Dimensions.get("window").height / 5 }}></View>
        </ScrollView>
      )}
      <Navbar navigation={navigation} navPath="Home" />
    </View>
  );
};

export default Rhizarthrose;

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
