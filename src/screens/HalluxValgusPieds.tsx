import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useRef } from "react";
import {
  Navbar,
  Questions,
  StartQuestions,
  TopContainer,
  Next,
} from "../components";
import { productsHalgusValgus } from "../utils/data";
import { answerAtom, userStepAtom } from "../utils/store";
import { useAtom } from "jotai";

const HalluxValgusPieds = ({ navigation }: any) => {
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
              question="Quel est l'état de votre gros orteil ?"
              ans1="Mobile"
              ans2="Immobile"
              step={1}
            />
          )}
          {userStep >= 2 && answer.q1 === 1 && (
            <Questions
              question="Ce dont vous nécessitez le plus est"
              ans1="Calmer la douleur"
              ans2="Séparer les orteils"
              ans3="Corriger la déformation et limiter son évolution"
              step={2}
            />
          )}
          {userStep >= 2 && answer.q1 === 2 && (
            <Questions
              question="Quel est votre besoin principal"
              ans1="Répartir les pression"
              ans2="Calmer la douleur"
              ans3="Les deux"
              step={2}
            />
          )}
          {userStep >= 3 && answer.q1 === 2 && answer.q2 === 1 && (
            <Questions
              question="Pour quel usage"
              ans1="Occasionnel"
              ans2="Douleurs chroniques ou permanentes"
              step={3}
            />
          )}
          {userStep >= 4 &&
            answer.q1 === 2 &&
            answer.q2 === 1 &&
            answer.q3 === 1 && (
              <Next
                navigation={navigation}
                product={productsHalgusValgus.productProtector}
              />
            )}
          {userStep >= 4 &&
            answer.q1 === 2 &&
            answer.q2 === 1 &&
            answer.q3 === 2 && (
              <Questions
                question="À quoi cela est-il associé"
                ans1="Des douleurs plantaires"
                ans2="Pas à des douleurs plantaires"
                step={4}
              />
            )}
          {userStep >= 5 &&
            answer.q1 === 2 &&
            answer.q2 === 1 &&
            answer.q3 === 2 &&
            answer.q4 === 1 && (
              <Next
                navigation={navigation}
                product={productsHalgusValgus.productCoussinetDouble}
              />
            )}
          {userStep >= 5 &&
            answer.q1 === 2 &&
            answer.q2 === 1 &&
            answer.q3 === 2 &&
            answer.q4 === 2 && (
              <Next
                navigation={navigation}
                product={productsHalgusValgus.productProtector}
              />
            )}
          {userStep >= 3 && answer.q1 === 2 && answer.q2 === 2 && (
            <Next
              navigation={navigation}
              product={productsHalgusValgus.productCremeConfortArticulaire}
            />
          )}
          {userStep >= 3 && answer.q1 === 2 && answer.q2 === 3 && (
            <Next
              navigation={navigation}
              product={productsHalgusValgus.productKitHV}
            />
          )}
          {userStep >= 3 && answer.q1 === 1 && answer.q2 === 1 && (
            <Next
              navigation={navigation}
              product={productsHalgusValgus.productCremeConfortArticulaire}
            />
          )}
          {userStep >= 3 && answer.q1 === 1 && answer.q2 === 2 && (
            <Next
              navigation={navigation}
              product={productsHalgusValgus.productEcarteurs}
            />
          )}
          {userStep >= 3 && answer.q1 === 1 && answer.q2 === 3 && (
            <Questions
              question="Pour quel période"
              ans1="Le jour"
              ans2="La nuit"
              ans3="Pendant la pratique sportive"
              step={3}
            />
          )}
          {userStep >= 4 &&
            answer.q1 === 1 &&
            answer.q2 === 3 &&
            answer.q3 === 1 && (
              <Questions
                question="À quoi cela est-il associé"
                ans1="Des douleurs plantaires"
                ans2="Pas à des douleurs plantaires"
                step={4}
              />
            )}
          {userStep >= 5 &&
            answer.q1 === 1 &&
            answer.q2 === 3 &&
            answer.q3 === 1 &&
            answer.q4 === 1 && (
              <Next
                navigation={navigation}
                product={productsHalgusValgus.productOrtheseCorrectiveDouble}
              />
            )}
          {userStep >= 5 &&
            answer.q1 === 1 &&
            answer.q2 === 3 &&
            answer.q3 === 1 &&
            answer.q4 === 2 && (
              <Next
                navigation={navigation}
                product={productsHalgusValgus.productOrtheseCorrectiveJour}
              />
            )}
          {userStep >= 4 &&
            answer.q1 === 1 &&
            answer.q2 === 3 &&
            answer.q3 === 2 && (
              <Next
                navigation={navigation}
                product={productsHalgusValgus.productOrtheseCorrectiveNuit}
              />
            )}
          {userStep >= 4 &&
            answer.q1 === 1 &&
            answer.q2 === 3 &&
            answer.q3 === 3 && (
              <Next
                navigation={navigation}
                product={productsHalgusValgus.productOrtheseCorrectiveSport}
              />
            )}
          <View style={{ height: Dimensions.get("window").height / 5 }}></View>
        </ScrollView>
      )}
      <Navbar navigation={navigation} navPath="Home" />
    </View>
  );
};

export default HalluxValgusPieds;

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
