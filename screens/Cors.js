import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import {
  Navbar,
  Questions,
  StartQuestions,
  TopContainer,
  Next,
} from '../components';
import { productsCors } from '../utils/data';

const Cors = ({ navigation }) => {
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
              question='De quoi nécessitez vous ?'
              ans1='Corriger la déformation des orteils'
              ans2='Répartir les pressions'
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
              imgPath={productsCors.barrettesSousDiaphysaires}
              littleDesc='Pour les orteils en griffe ou en marteau'
              productName='Barrette sous-diaphysaire'
              desc={[
                'Se chausser lorsque l’on a un orteil en marteau ou en griffe peut être très douloureux. En protégeant l’orteil sans le redresser, le risque est qu’il finisse par se fixer dans cette position et qu’il soit plus difficile ensuite de le redresser. Et si la solution était de positionner une barrette sous diaphysaire sous les orteils afin de les allonger ? On conserve ainsi une certaine souplesse des orteils en évitant les conflits avec la chaussure.',
                "Les barrettes sous-diaphysaires en silicone EPITACT® pour les orteils en marteau ou en griffe s’adaptent parfaitement à l'espace situé sous les doigts de pieds. Le gel EPITHELIUM 26® qui les constitue vise à modifier confortablement les appuis pour limiter la formation des cors pulpaires et dorsaux.",
                "De plus, le dispositif a une excellente tenue grâce à son élastique souple à passer autour du 3e orteil. Le confort est encore amélioré par le choix d'un tissu doux favorisant l'évacuation de la sueur.",
              ]}
            />
          )}
          {step >= 2 && answerQ1 === 2 && (
            <Questions
              question='Où se situe votre douleur précisément ?'
              ans1="Cors situé sur le dessus de l'orteil"
              ans2="Cors situé à l'extrémité de l'orteil"
              ans3="Hématome sous l'ongle pendant la pratique sportive"
              setAnswer={setAnswerQ2}
              step={2}
              currentStep={step}
              setStep={setStep}
              backToPreviousStep={backToPreviousStep}
            />
          )}
          {step >= 2 && answerQ1 === 2 && answerQ2 === 2 && (
            <Next
              navigation={navigation}
              imgPath={productsCors.doigtiers}
              littleDesc='Pour protéger les orteils et soulager la douleur des cors pulpaires et ongles incarnés ou bleus'
              productName='Doigtiers'
              desc={[
                'Les doigtiers en silicone EPITACT® sont recommandés pour protéger l’extrémité des orteils des cors pulpaires, des ongles incarnés et des ongles bleus. Portés quotidiennement, ces protège-orteils peuvent s’utiliser pour soulager les douleurs ou bien en prévention. En effet, une fois le cor supprimé par un podologue, ils éviteront l’apparition ou la réapparition du cor.',
              ]}
            />
          )}
          {step >= 2 && answerQ1 === 2 && answerQ2 === 3 && (
            <Next
              navigation={navigation}
              imgPath={productsCors.protectionsOnglesBleusSport}
              littleDesc='Doigtiers de protection ongles bleus durant la pratique du sport'
              productName='DOIGTIERS PROTECTION ONGLES BLEUS SPORT'
              desc={[
                'Ces protections ont été spécialement conçues pour les sports où les orteils sont soumis à des impacts répétés contre la chaussure en supprimant les pressions et les micro-chocs sur l’ongle.',
                'Que l’ongle bleu soit susceptible d’apparaître à cause de chocs répétitifs contre la chaussure (rando, trail, course à pied) ou suite à un traumatisme provoqué par un autre joueur (football, rugby), les doigtiers de protection ongles bleus EPITACT® SPORT joueront efficacement leur rôle. Ils sont aussi indiqués en prévention et lorsque l’ongle bleu est déjà formé.',
              ]}
            />
          )}
          {step >= 3 && answerQ1 === 2 && answerQ2 === 1 && (
            <Questions
              question='Pouvez-vous nous donner plus de détails ?'
              ans1='Plusieurs orteils sont concernés'
              ans2='Un seul orteil concerné'
              ans3='Non associées à des douleurs plantaires'
              setAnswer={setAnswerQ3}
              step={3}
              currentStep={step}
              setStep={setStep}
              backToPreviousStep={backToPreviousStep}
            />
          )}
          {step >= 4 && answerQ1 === 2 && answerQ2 === 1 && answerQ3 === 1 && (
            <Next
              navigation={navigation}
              imgPath={productsCors.protegePointesOrteils}
              littleDesc='Vise à protéger et soulager le dessus des orteils en marteau, en griffe ou cors dorsaux'
              productName='PROTÈGE-POINTES ORTEILS EN MARTEAU'
              desc={[
                'Vous avez un ou plusieurs cors sur le dessus des orteils, ou des orteils en marteau ou en griffe ? Ces protège-pointes s’enfilent comme des chaussettes pour protéger le dessus de tous vos orteils.',
                'Un orteil en marteau ou en griffe est assez facile à protéger mais la tâche se complique lorsque plusieurs doigts de pieds sont concernés. Il faut alors opter pour une solution globale car la mise en place de protections individuelles sur chaque orteil peut augmenter considérablement l’encombrement dans la chaussure et créer alors davantage de pressions.',
                'Les protège-pointes orteils en marteau apportent une solution intégrale.',
                "La lunule d'EPITHELIUM 26® positionnée au-dessus des orteils répartit les pressions et limite la formation des cors sur le dessus des doigts de pieds.",
                "Ce dispositif protège l'ensemble des orteils avec un encombrement réduit. Les protège-pointes EPITACT® réchauffent aussi les extrémités souvent mal irriguées.",
              ]}
            />
          )}
          {step >= 4 && answerQ1 === 2 && answerQ2 === 1 && answerQ3 === 2 && (
            <Next
              navigation={navigation}
              imgPath={productsCors.digitubes}
              littleDesc='Protègent les orteils et soulagent la douleur liée aux cors et œils-de-perdrix'
              productName='DIGITUBES®'
              desc={[
                'Les DIGITUBES® EPITACT®  soulagent et éliminent naturellement les cors dorsaux (au-dessus des orteils) et les œils-de-perdrix (entre les orteils). Ils peuvent aussi s’utiliser en prévention pour éviter la formation d’un cor ou bien d’une ampoule sur les orteils.',
              ]}
            />
          )}
          {step >= 4 && answerQ1 === 2 && answerQ2 === 1 && answerQ3 === 3 && (
            <Next
              navigation={navigation}
              imgPath={productsCors.separateurs}
              littleDesc='Protègent les orteils et soulagent la douleur des cors interdigitaux et œils-de-perdrix'
              productName='SÉPARATEURS'
              desc={[
                "Optez pour les séparateurs d’orteils en silicone, conçus pour soulager les cors en séparant les orteils de quelques millimètres. Ils ont pour but d'éviter le chevauchement de deux orteils en cas de déformation.",
                'Vous avez deux orteils qui ont tendance à se chevaucher ou à se toucher ? Ceci est fréquent et provoque souvent la formation de corne dans l’espace interdigital. C’est ce que l’on appelle communément un œil-de-perdrix. Pour éviter la formation de ce cor, l’idée est de séparer les deux orteils grâce au séparateur pour doigts de pieds EPITACT® constitué d’un matériau répartiteur de pressions très confortable et à la forme parfaitement ergonomique.',
                "Leur forme et le gel EPITHELIUM™ permettent aux séparateurs d’orteils en silicone EPITACT® de s'adapter parfaitement à la forme du pied et favorisent leur maintien tout au long de la journée.",
                "Astuce : En associant deux petits séparateurs, vous pouvez augmenter l'écart de séparation entre deux orteils.",
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

export default Cors;

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
