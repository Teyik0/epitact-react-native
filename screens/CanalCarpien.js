import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import {
  Navbar,
  Questions,
  StartQuestions,
  TopContainer,
  Next,
} from '../components';
import { productsCanalCarpien } from '../utils/data';

const CanalCarpien = ({ navigation }) => {
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
            scrollRef.current.scrollToEnd({ animated: true })
          }
        >
          {step >= 1 && (
            <Questions
              question='Quel est votre besoin ?'
              ans1='Immobiliser le poignet la nuit'
              ans2='Préserver le poignet durant la journée'
              setAnswer={setAnswerQ1}
              step={1}
              currentStep={step}
              setStep={setStep}
              backToPreviousStep={backToPreviousStep}
            />
          )}
          {step >= 2 && answerQ1 === 1 && (
            <Next
              navigation={navigation}
              imgPath={productsCanalCarpien.carpImmo}
              productName='Carpien Immobilisateur'
              littleDesc='Pour soulager les douleurs et fourmillements liés au syndrome du canal carpien'
              desc={[
                'Durant la nuit ou dans toutes les situations où vous n’utilisez pas votre main, le port régulier de l’orthèse de repos CARP’IMMO™ est préconisé en cas de syndrome du canal carpien, de troubles musculosquelettiques, d’inflammations ou de tendinites du poignet.',
                'Contrairement à ce que l’on peut imaginer, le poignet n’est pas mis au repos durant la nuit car nous avons naturellement tendance à le plier et à placer la main sous l’oreiller. La pression est ainsi augmentée dans le canal carpien et des douleurs apparaissent. L’orthèse de poignet pour canal carpien CARP’IMMO™ a pour objectif de maintenir le poignet en position neutre pour favoriser des nuits paisibles et un sommeil réparateur.',
              ]}
            />
          )}
          {step >= 2 && answerQ1 === 2 && (
            <Next
              navigation={navigation}
              imgPath={productsCanalCarpien.carpActiv}
              productName='Carpien Actif'
              littleDesc='Apaise les fourmillements et douleurs au poignet liés au syndrome du canal carpien'
              desc={[
                'L’orthèse EPITACT® pour le canal carpien est une orthèse souple d’activité conçue pour accompagner le poignet durant vos activités. Idéale si vous souffrez du syndrome du canal carpien.',
                'En limitant l’amplitude des mouvements du poignet et les arrêts brusques dans vos gestes qui favorisent le syndrome du canal carpien, CARP’ACTIV™ vous aide à retrouver plaisir et sérénité dans vos activités quotidiennes. Souple, fine et discrète, cette orthèse pour le canal carpien d’EPITACT® est conçue pour accompagner les mouvements de votre poignet tout en conservant l’usage de vos doigts.',
              ]}
            />
          )}
          <View style={{ height: Dimensions.get('window').height / 5 }}></View>
        </ScrollView>
      )}
      <Navbar navigation={navigation} navPath='Home' />
    </View>
  );
};

export default CanalCarpien;

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
