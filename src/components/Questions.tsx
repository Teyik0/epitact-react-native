import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { Dispatch, SetStateAction } from "react";
import Animated, {
  FadeInUp,
  Layout,
  FadeOutDown,
} from "react-native-reanimated";
import { useAtom } from "jotai";
import { userStepAtom, answerAtom } from "../utils/store";

interface QuestionsProps {
  question: string;
  ans1: string;
  ans2: string;
  ans3?: string;
  step: number;
}

const Questions = ({ question, ans1, ans2, ans3, step }: QuestionsProps) => {
  const [isToggle, setIsToggle] = useState({
    firstAns: false,
    secondAns: false,
    thirdAns: false,
  });
  const [userStep, setUserStep] = useAtom(userStepAtom);
  const [answer, setAnswer] = useAtom(answerAtom);

  const handleAnswer = (answerNumber: number) => {
    if (step === 1) setAnswer({ ...answer, q1: answerNumber });
    if (step === 2) setAnswer({ ...answer, q2: answerNumber });
    if (step === 3) setAnswer({ ...answer, q3: answerNumber });
    if (step === 4) setAnswer({ ...answer, q4: answerNumber });
  };

  const handleClick1 = () => {
    setIsToggle({ firstAns: true, secondAns: false, thirdAns: false });
    handleAnswer(1);
    setUserStep(step + 1);
  };
  const handleClick2 = () => {
    setIsToggle({ firstAns: false, secondAns: true, thirdAns: false });
    handleAnswer(2);
    setUserStep(step + 1);
  };
  const handleClick3 = () => {
    setIsToggle({ firstAns: false, secondAns: false, thirdAns: true });
    handleAnswer(3);
    setUserStep(step + 1);
  };

  useEffect(() => {
    if (userStep === step) {
      setIsToggle({ firstAns: false, secondAns: false, thirdAns: false });
    }
  }, [userStep]);

  return (
    <Animated.View
      style={{ marginTop: Dimensions.get("window").width * 0.05 }}
      entering={FadeInUp.duration(500)}
      layout={Layout.springify()}
      exiting={FadeOutDown.duration(300)}
    >
      <Text
        style={{
          marginBottom: Dimensions.get("window").height * 0.015,
          marginLeft: Dimensions.get("window").width * 0.05,
          fontSize: Dimensions.get("window").width * 0.025,
          color: "black",
          fontWeight: "bold",
        }}
      >
        {question}
      </Text>
      <View style={styles.container}>
        {/* FirstQuestion */}
        <Pressable
          onPress={handleClick1}
          style={{
            ...styles.questionBlock,
            backgroundColor: isToggle.firstAns ? "gray" : "white",
          }}
        >
          <Text style={styles.textStyle}>{ans1}</Text>
        </Pressable>
        {/* SecondQuestion */}
        <Pressable
          onPress={handleClick2}
          style={{
            ...styles.questionBlock,
            backgroundColor: isToggle.secondAns ? "gray" : "white",
          }}
        >
          <Text style={styles.textStyle}>{ans2}</Text>
        </Pressable>
        {/* ThirdQuestion */}
        {ans3 && (
          <Pressable
            onPress={handleClick3}
            style={{
              ...styles.questionBlock,
              backgroundColor: isToggle.thirdAns ? "gray" : "white",
            }}
          >
            <Text style={styles.textStyle}>{ans3}</Text>
          </Pressable>
        )}
      </View>
    </Animated.View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
  },
  questionBlock: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Dimensions.get("window").height * 0.015,
  },
  textStyle: {
    textAlign: "center",
    fontSize: Dimensions.get("window").width * 0.025,
    fontWeight: "normal",
  },
});
