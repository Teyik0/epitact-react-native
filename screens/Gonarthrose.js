import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import {
  Navbar,
  Questions,
  StartQuestions,
  TopContainer,
  Next,
} from '../components';
import { productsGonarthrose } from '../utils/data';

const Gonarthrose = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const [isPressed, setIsPressed] = useState({
    startButton: false,
    backButton: false,
    stopButton: false,
  }); //état des boutons start, retour et stop
  const startQuestions = () => {
    setIsPressed({ ...isPressed, startButton: true });
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsPressed({ ...isPressed, startButton: false });
    }, 10);
  };
  const backToPreviousStep = () => {
    if (step !== 0) {
      setIsPressed({ ...isPressed, backButton: true });
      setTimeout(() => {
        setIsPressed({ ...isPressed, backButton: false });
        setStep((prev) => prev - 1);
      }, 100);
    }
  };
  const returnToFirstStep = () => {
    setIsPressed({ ...isPressed, stopButton: true });
    setTimeout(() => {
      setIsPressed({ ...isPressed, stopButton: false });
      setStep(0);
    }, 100);
  };
  //0 signifie qu'aucune réponse n'a été choisi ou répondu
  const [answerQ1, setAnswerQ1] = useState(0);
  const [answerQ2, setAnswerQ2] = useState(0);
  const [answerQ3, setAnswerQ3] = useState(0);
  const [answerQ4, setAnswerQ4] = useState(0);
  //Reset des questions à chaque changement de réponse antérieur
  useEffect(() => {
    setAnswerQ2(0);
    setAnswerQ3(0);
    setAnswerQ4(0);
  }, [answerQ1]);
  useEffect(() => {
    setAnswerQ3(0);
    setAnswerQ4(0);
  }, [answerQ2]);
  useEffect(() => {
    setAnswerQ4(0);
  }, [answerQ3]);

  const scrollRef = useRef();
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <View style={styles.bigCircle} />
      <View style={styles.littleCircle} />

      <TopContainer
        isPressed={isPressed}
        backToPreviousStep={backToPreviousStep}
        returnToFirstStep={returnToFirstStep}
        step={step}
      />

      {step === 0 && (
        <StartQuestions isPressed={isPressed} startQuestions={startQuestions} />
      )}
      {/* QUESTIONNAIRE */}
      {step >= 1 && (
        <ScrollView
          ref={scrollRef}
          onContentSizeChange={() =>
            scrollRef.current.scrollToEnd({ animated: true })
          }
        >
          {step >= 1 && (
            <Questions
              question='Quel est votre besoin ?'
              ans1='Soulager et prévenir l’évolution de l’arthrose'
              ans2='Sécuriser l’articulation fragile'
              ans3='Préserver la mobilité articulaire et entretenir le cartilage'
              setAnswer={setAnswerQ1}
              step={1}
              currentStep={step}
              setStep={setStep}
              backToPreviousStep={backToPreviousStep}
            />
          )}
          {step >= 2 && (
            <Next
              navigation={navigation}
              product={productsGonarthrose.physioStrap}
            />
          )}
          <View style={{ height: Dimensions.get('window').height / 5 }}></View>
        </ScrollView>
      )}
      <Navbar navigation={navigation} navPath='Home' />
    </View>
  );
};

export default Gonarthrose;

const styles = StyleSheet.create({
  bigCircle: {
    width: Dimensions.get('window').height * 0.6,
    height: Dimensions.get('window').height * 0.6,
    borderRadius: 1000,
    backgroundColor: '#6892FF',
    opacity: 0.4,
    position: 'absolute',
    top: Dimensions.get('window').height * 0.12,
    right: Dimensions.get('window').width * 0.12,
    left: -150,
    zIndex: -1,
  },
  littleCircle: {
    width: Dimensions.get('window').height * 0.45,
    height: Dimensions.get('window').height * 0.45,
    borderRadius: 1000,
    backgroundColor: '#6EC36C',
    opacity: 0.3,
    position: 'absolute',
    top: Dimensions.get('window').height * 0.48,
    right: -200,
  },
});
