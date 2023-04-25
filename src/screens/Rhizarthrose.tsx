import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import {
  Navbar,
  Questions,
  StartQuestions,
  TopContainer,
  Next,
} from '../components';
import { productsRhizarthrose } from '../utils/data';

const Rhizarthrose = ({ navigation }: any) => {
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
    return true;
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

  const scrollRef = useRef<ScrollView>(null);
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
            scrollRef.current?.scrollToEnd({ animated: true })
          }
        >
          {step >= 1 && (
            <Questions
              question='Quel est votre besoin ?'
              ans1="Préserver l'articulation durant les activités manuelles"
              ans2='Limiter les micro-mouvements traumatisants'
              ans3='Maintenir le pouce au repos'
              setAnswer={setAnswerQ1}
              step={1}
              currentStep={step}
              setStep={setStep}
            />
          )}
          {step >= 2 && answerQ1 === 1 && (
            <Next
              navigation={navigation}
              product={productsRhizarthrose.soupleActivite}
            />
          )}
          {step >= 2 && answerQ1 === 2 && (
            <Questions
              question='Pour quel utilisation ?'
              ans1='En journée durant les activités'
              ans2='La nuit'
              ans3='Au repos'
              setAnswer={setAnswerQ2}
              step={2}
              currentStep={step}
              setStep={setStep}
            />
          )}
          {step >= 3 && answerQ1 === 2 && answerQ2 === 1 && (
            <Next
              navigation={navigation}
              product={productsRhizarthrose.soupleActivite}
            />
          )}
          {step >= 3 && answerQ1 === 2 && answerQ2 === 2 && (
            <Next
              navigation={navigation}
              product={productsRhizarthrose.thermoformable}
            />
          )}
          {step >= 3 && answerQ1 === 2 && answerQ2 === 3 && (
            <Next
              navigation={navigation}
              product={productsRhizarthrose.rigideDeRepos}
            />
          )}
          {step >= 2 && answerQ1 === 3 && (
            <Questions
              question='Pour quel utilisation ?'
              ans1='La nuit'
              ans2='La journée'
              setAnswer={setAnswerQ2}
              step={2}
              currentStep={step}
              setStep={setStep}
            />
          )}
          {step >= 3 && answerQ1 === 3 && answerQ2 === 1 && (
            <Next
              navigation={navigation}
              product={productsRhizarthrose.thermoformable}
            />
          )}
          {step >= 3 && answerQ1 === 3 && answerQ2 === 2 && (
            <Next
              navigation={navigation}
              product={productsRhizarthrose.rigideDeRepos}
            />
          )}
          <View style={{ height: Dimensions.get('window').height / 5 }}></View>
        </ScrollView>
      )}
      <Navbar navigation={navigation} navPath='Home' />
    </View>
  );
};

export default Rhizarthrose;

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
