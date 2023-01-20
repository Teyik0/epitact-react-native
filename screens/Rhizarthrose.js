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

const Rhizarthrose = ({ navigation }) => {
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
              ans1="Préserver l'articulation durant les activités manuelles"
              ans2='Limiter les micro-mouvements traumatisants'
              ans3='Maintenir le pouce au repos'
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
              imgPath={productsRhizarthrose.soupleActivite}
              productName='Souple d’activité'
              littleDesc='Maintient et soulage le pouce en cas de rhizarthrose (arthrose du pouce), sans entraver la mobilité'
              desc={[
                "EPITACT® a créé l'orthèse souple d’activité, une orthèse de pouce pour la rhizarthrose qui a pour but de soulager les douleurs articulaires liées à l’arthrose à la base du pouce tout en conservant l’entière fonctionnalité de la main !",
                'Le port pendant la journée de l’orthèse proprioceptive est recommandé pour soulager les douleurs articulaires liées à de la rhizarthrose. Cette orthèse de pouce souple limite les micromouvements traumatisants. Il maintient le pouce en position de repos et préserve la chaleur locale au niveau de l’articulation. Souple, fine et discrète, elle vise à conserver l’entière fonctionnalité de votre main !',
              ]}
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
              backToPreviousStep={backToPreviousStep}
            />
          )}
          {step >= 3 && answerQ1 === 2 && answerQ2 === 1 && (
            <Next
              navigation={navigation}
              imgPath={productsRhizarthrose.soupleActivite}
              productName='Souple d’activité'
              littleDesc='Maintient et soulage le pouce en cas de rhizarthrose (arthrose du pouce), sans entraver la mobilité'
              desc={[
                "EPITACT® a créé l'orthèse souple d’activité, une orthèse de pouce pour la rhizarthrose qui a pour but de soulager les douleurs articulaires liées à l’arthrose à la base du pouce tout en conservant l’entière fonctionnalité de la main !",
                'Le port pendant la journée de l’orthèse proprioceptive est recommandé pour soulager les douleurs articulaires liées à de la rhizarthrose. Cette orthèse de pouce souple limite les micromouvements traumatisants. Il maintient le pouce en position de repos et préserve la chaleur locale au niveau de l’articulation. Souple, fine et discrète, elle vise à conserver l’entière fonctionnalité de votre main !',
              ]}
            />
          )}
          {step >= 3 && answerQ1 === 2 && answerQ2 === 2 && (
            <Next
              navigation={navigation}
              imgPath={productsRhizarthrose.thermoformable}
              productName='Thermoformable'
              littleDesc="Immobilise l'articulation et soulage les douleurs, à mouler (thermoformable)."
              desc={[
                'En s’adaptant parfaitement à votre morphologie, l’orthèse thermoformable EPITACT® à mouler soi-même facilement, vise à calmer la douleur et à prévenir les déformations (pousse en Z).',
                "Conseillée pour soulager les douleurs articulaires à la base du pouce déformé, elle est conçue pour limiter l'évolution de la rhizarthrose. Cette orthèse est thermoformable : elle devient souple lorsqu’elle est immergée dans l'eau chaude. Dès qu'elle est enfilée, elle prend la forme de votre main en positionnant naturellement le pouce au repos. Elle durcit et devient à nouveau rigide en quelques minutes. Une fois thermoformée, l’orthèse de pouce est ainsi parfaitement adaptée à votre morphologie.",
              ]}
            />
          )}
          {step >= 3 && answerQ1 === 2 && answerQ2 === 3 && (
            <Next
              navigation={navigation}
              imgPath={productsRhizarthrose.rigideDeRepos}
              productName='Rigide de repos'
              littleDesc="Maintient le pouce pour prévenir et soulager les douleurs d'arthrose"
              desc={[
                'La nuit ou au repos, optez pour l’orthèse rigide de repos qui vise à maintenir le pouce en position neutre, soulager et prévenir l’évolution de la rhizarthrose.',
                "L'orthèse pouce de repos rigide doit être portée la nuit ou dans toutes les situations où la main n'est pas utilisée. Vous pourrez aisément vous endormir ou profiter d’un moment de détente pendant que votre pouce est immobilisé en position de repos, en ouvrant la commissure entre l’index et le pouce. Elle a été développée pour vous soulager les douleurs articulaires et limiter l'évolution de la rhizarthrose.",
              ]}
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
              backToPreviousStep={backToPreviousStep}
            />
          )}
          {step >= 3 && answerQ1 === 3 && answerQ2 === 1 && (
            <Next
              navigation={navigation}
              imgPath={productsRhizarthrose.thermoformable}
              productName='Thermoformable'
              littleDesc="Immobilise l'articulation et soulage les douleurs, à mouler (thermoformable)."
              desc={[
                'En s’adaptant parfaitement à votre morphologie, l’orthèse thermoformable EPITACT® à mouler soi-même facilement, vise à calmer la douleur et à prévenir les déformations (pousse en Z).',
                "Conseillée pour soulager les douleurs articulaires à la base du pouce déformé, elle est conçue pour limiter l'évolution de la rhizarthrose. Cette orthèse est thermoformable : elle devient souple lorsqu’elle est immergée dans l'eau chaude. Dès qu'elle est enfilée, elle prend la forme de votre main en positionnant naturellement le pouce au repos. Elle durcit et devient à nouveau rigide en quelques minutes. Une fois thermoformée, l’orthèse de pouce est ainsi parfaitement adaptée à votre morphologie.",
              ]}
            />
          )}
          {step >= 3 && answerQ1 === 3 && answerQ2 === 2 && (
            <Next
              navigation={navigation}
              imgPath={productsRhizarthrose.rigideDeRepos}
              productName='Rigide de repos'
              littleDesc="Maintient le pouce pour prévenir et soulager les douleurs d'arthrose"
              desc={[
                'La nuit ou au repos, optez pour l’orthèse rigide de repos qui vise à maintenir le pouce en position neutre, soulager et prévenir l’évolution de la rhizarthrose.',
                "L'orthèse pouce de repos rigide doit être portée la nuit ou dans toutes les situations où la main n'est pas utilisée. Vous pourrez aisément vous endormir ou profiter d’un moment de détente pendant que votre pouce est immobilisé en position de repos, en ouvrant la commissure entre l’index et le pouce. Elle a été développée pour vous soulager les douleurs articulaires et limiter l'évolution de la rhizarthrose.",
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
