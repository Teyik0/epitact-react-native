import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import {
  Navbar,
  Questions,
  StartQuestions,
  TopContainer,
  Next,
} from '../components';
import { productsHalgusValgus } from '../utils/data';

const HalluxValgusPieds = ({ navigation }) => {
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
              question="Quel est l'état de votre gros orteil ?"
              ans1='Mobile'
              ans2='Immobile'
              setAnswer={setAnswerQ1}
              step={1}
              currentStep={step}
              setStep={setStep}
              backToPreviousStep={backToPreviousStep}
            />
          )}
          {step >= 2 && answerQ1 === 1 && (
            <Questions
              question='Ce dont vous nécessitez le plus est'
              ans1='Calmer la douleur'
              ans2='Séparer les orteils'
              ans3='Corriger la déformation et limiter son évolution'
              setAnswer={setAnswerQ2}
              step={2}
              currentStep={step}
              setStep={setStep}
              backToPreviousStep={backToPreviousStep}
            />
          )}
          {step >= 2 && answerQ1 === 2 && (
            <Questions
              question='Quel est votre besoin principal'
              ans1='Répartir les pression'
              ans2='Calmer la douleur'
              ans3='Les deux'
              setAnswer={setAnswerQ2}
              step={2}
              currentStep={step}
              setStep={setStep}
              backToPreviousStep={backToPreviousStep}
            />
          )}
          {step >= 3 && answerQ1 === 2 && answerQ2 === 1 && (
            <Questions
              question='Pour quel usage'
              ans1='Occasionnel'
              ans2='Douleurs chroniques ou permanentes'
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
              imgPath={productsHalgusValgus.productKitHV}
              productName='Kit Hallux Valgus'
              desc={[
                'Le kit hallux valgus est dédié aux personnes qui ressentent de l’inconfort au niveau d’un hallux valgus (« oignon »), inconfort lié à une douleur articulaire et/ou des frottements excessifs. Constitué d’un sérum apaisant à base d’huiles essentielles et de protections anti-frottements, le kit est efficace toute la journée.',
              ]}
              littleDesc="Inconfort au niveau de l'oignon lié à une douleur articulaire et/ou des frottements excessifs."
            />
          )}
          {step >= 4 && answerQ1 === 2 && answerQ2 === 1 && answerQ3 === 2 && (
            <Questions
              question='À quoi cela est-il associé'
              ans1='Des douleurs plantaires'
              ans2='Pas à des douleurs plantaires'
              step={4}
              currentStep={step}
              setAnswer={setAnswerQ4}
              setStep={setStep}
              backToPreviousStep={backToPreviousStep}
            />
          )}
          {step >= 5 &&
            answerQ1 === 2 &&
            answerQ2 === 1 &&
            answerQ3 === 2 &&
            answerQ4 === 1 && (
              <Next
                navigation={navigation}
                imgPath={productsHalgusValgus.productCoussinetDouble}
                littleDesc="Développés pour soulager les douleurs sur l' « oignon » (hallux valgus) et l'avant-pied (durillons)."
                desc={[
                  'Vous avez aussi des douleurs plantaires ? Les coussinets double protection EPITACT® ont été développés pour soulager les deux zones, l’hallux valgus (« oignon ») et sous l’avant-pied !',
                ]}
                productName='Coussinet double protection'
              />
            )}
          {step >= 5 &&
            answerQ1 === 2 &&
            answerQ2 === 1 &&
            answerQ3 === 2 &&
            answerQ4 === 2 && (
              <Next
                navigation={navigation}
                imgPath={productsHalgusValgus.productProtector}
                littleDesc="Destinée à soulager les douleurs sur l' « oignon » de l'hallux valgus au quotidien."
                desc={[
                  "Pour un usage quotidien, adoptez la protection hallux valgus EPITACT® ! Fine et discrète, elle a pour objectif de limiter les frottements et d'apaiser les douleurs conflictuelles avec la chaussure.",
                  "Vous souffrez d’un « oignon » au pied ? Même si la déformation n’est pas très marquée, le chaussage est très vite douloureux. Le conflit avec la chaussure crée des douleurs sur l’excroissance osseuse et de la corne liée à des pressions et frottements excessifs. Il faut donc interposer entre la chaussure et l’ « oignon » une interface qui permette de répartir les charges et de soulager la douleur. C’est le rôle remplit par le gel silicone EPITHELIUM 26® intégré à la protection hallux valgus EPITACT®. Une pastille d'1 mm de ce gel positionnée sur l' « oignon » permet d'apaiser les douleurs.",
                ]}
                productName='PROTECTION HALLUX VALGUS'
              />
            )}
          {step >= 3 && answerQ1 === 2 && answerQ2 === 2 && (
            <Next
              navigation={navigation}
              imgPath={productsHalgusValgus.productCremeConfortArticulaire}
              littleDesc='Développée pour dynamiser les pieds gonflés et apaiser les sensations de jambes lourdes.'
              productName='Crème de confort articulaire'
              desc={[
                'Douleurs articulaires intenses, hallux valgus. Pour soulager les douleurs articulaires du pied, cette crème apaisante est 100% d’origine naturelle et sans paraben L’huile essentielle de Gaulthérie est réputée pour ses propriétés calmantes.',
                'L’huile essentielle de Genévrier est reconnue pour son effet relaxant. Enfin, l’huile essentielle de Pin a été choisie pour son action positive sur la douleur. Ces huiles essentielles (Gaulthérie, Genévrier et Pin) agissent en synergie pour une plus grande efficacité. Appliquée sur les pieds en massage régulièrement, elle apporte soulagement et détente aux articulations fatiguées, sollicitées et douloureuses.',
              ]}
            />
          )}
          {step >= 3 && answerQ1 === 2 && answerQ2 === 3 && (
            <Next
              navigation={navigation}
              imgPath={productsHalgusValgus.productKitHV}
              desc={[
                'Le kit hallux valgus est dédié aux personnes qui ressentent de l’inconfort au niveau d’un hallux valgus (« oignon »), inconfort lié à une douleur articulaire et/ou des frottements excessifs. Constitué d’un sérum apaisant à base d’huiles essentielles et de protections anti-frottements, le kit est efficace toute la journée.',
              ]}
              littleDesc="Inconfort au niveau de l'oignon lié à une douleur articulaire et/ou des frottements excessifs."
              productName='Kit Hallux Valgus'
            />
          )}
          {step >= 3 && answerQ1 === 1 && answerQ2 === 1 && (
            <Next
              navigation={navigation}
              imgPath={productsHalgusValgus.productCremeConfortArticulaire}
              littleDesc='Développée pour dynamiser les pieds gonflés et apaiser les sensations de jambes lourdes.'
              productName='Crème de confort articulaire'
              desc={[
                'Douleurs articulaires intenses, hallux valgus. Pour soulager les douleurs articulaires du pied, cette crème apaisante est 100% d’origine naturelle et sans paraben L’huile essentielle de Gaulthérie est réputée pour ses propriétés calmantes.',
                'L’huile essentielle de Genévrier est reconnue pour son effet relaxant. Enfin, l’huile essentielle de Pin a été choisie pour son action positive sur la douleur. Ces huiles essentielles (Gaulthérie, Genévrier et Pin) agissent en synergie pour une plus grande efficacité. Appliquée sur les pieds en massage régulièrement, elle apporte soulagement et détente aux articulations fatiguées, sollicitées et douloureuses.',
              ]}
            />
          )}
          {step >= 3 && answerQ1 === 1 && answerQ2 === 2 && (
            <Next
              navigation={navigation}
              imgPath={productsHalgusValgus.productEcarteurs}
              littleDesc='Pour séparer les orteils en cas d’hallux valgus (« oignon »).'
              productName='Ecarteurs'
              desc={[
                'Votre gros orteil et le deuxième se chevauchent ? Les écarteurs EPITACT® ont pour but de limiter la déviation du gros orteil en évitant le chevauchement et ainsi l’apparition de cors interdigitaux.',
                'Si la déformation liée à l’hallux valgus est importante, il arrive que le gros orteil ait une fâcheuse tendance à venir se coller contre son voisin. Outre le caractère difficile du chaussage, un autre problème peut se greffer sur cette pathologie : la formation de callosités, de cors ou d’œil-de-perdrix entre les deux doigts de pied. Il est alors essentiel de les séparer grâce à un ou plusieurs écarteurs.',
              ]}
            />
          )}
          {step >= 3 && answerQ1 === 1 && answerQ2 === 3 && (
            <Questions
              question='Pour quel période'
              ans1='Le jour'
              ans2='La nuit'
              ans3='Pendant la pratique sportive'
              step={3}
              currentStep={step}
              setAnswer={setAnswerQ3}
              setStep={setStep}
              backToPreviousStep={backToPreviousStep}
            />
          )}
          {step >= 4 && answerQ1 === 1 && answerQ2 === 3 && answerQ3 === 1 && (
            <Questions
              question='À quoi cela est-il associé'
              ans1='Des douleurs plantaires'
              ans2='Pas à des douleurs plantaires'
              step={4}
              currentStep={step}
              setAnswer={setAnswerQ4}
              setStep={setStep}
              backToPreviousStep={backToPreviousStep}
            />
          )}
          {step >= 5 &&
            answerQ1 === 1 &&
            answerQ2 === 3 &&
            answerQ3 === 1 &&
            answerQ4 === 1 && (
              <Next
                navigation={navigation}
                imgPath={productsHalgusValgus.productOrtheseCorrectiveDouble}
                desc={[
                  'L’orthèse corrective double a été développée pour limiter l’évolution de l’hallux valgus (grâce à une correction de l’axe du gros orteil) tout en protégeant l’avant-pied.',
                  'Un « oignon » est souvent associé à des douleurs en zone plantaire. Le gros orteil ne jouant plus son rôle de support, la charge qu’il supportait se répartit naturellement sur le 2e et le 3e métatarsien. De ce fait, des zones de corne, de callosités parfois douloureuses apparaissent sous le pied.',
                ]}
                littleDesc='Conçue pour corriger la déviation et soulager les douleurs plantaires.'
                productName='ORTHÈSE CORRECTIVE DOUBLE HALLUX VALGUS'
              />
            )}
          {step >= 5 &&
            answerQ1 === 1 &&
            answerQ2 === 3 &&
            answerQ3 === 1 &&
            answerQ4 === 2 && (
              <Next
                navigation={navigation}
                imgPath={productsHalgusValgus.productOrtheseCorrectiveJour}
                desc={[
                  'UNE ORTHÈSE SOUPLE QUI VISE À CORRIGER LA DÉFORMATION LORS DE LA MARCHE.',
                  'Vous souhaitez soulager vos douleurs articulaires et conflictuelles avec vos chaussures tout en redressant votre orteil ? L’orthèse corrective hallux valgus souple de jour EPITACT® agit sur les facteurs aggravant la déformation, contrairement aux orthèses rigides.',
                ]}
                littleDesc='Correcteur de l’hallux valgus qui réaxe le gros orteil et soulage les douleurs à la marche.'
                productName='ORTHÈSE CORRECTIVE HALLUX VALGUS « OIGNON » JOUR'
              />
            )}
          {step >= 4 && answerQ1 === 1 && answerQ2 === 3 && answerQ3 === 2 && (
            <Next
              navigation={navigation}
              imgPath={productsHalgusValgus.productCremeConfortArticulaire}
              desc={[
                'Douleurs articulaires intenses, hallux valgus. Pour soulager les douleurs articulaires du pied, cette crème apaisante est 100% d’origine naturelle et sans paraben L’huile essentielle de Gaulthérie est réputée pour ses propriétés calmantes.',
                'L’huile essentielle de Genévrier est reconnue pour son effet relaxant. Enfin, l’huile essentielle de Pin a été choisie pour son action positive sur la douleur. Ces huiles essentielles (Gaulthérie, Genévrier et Pin) agissent en synergie pour une plus grande efficacité. Appliquée sur les pieds en massage régulièrement, elle apporte soulagement et détente aux articulations fatiguées, sollicitées et douloureuses.',
              ]}
              littleDesc='Développée pour dynamiser les pieds gonflés et apaiser les sensations de jambes lourdes.'
              productName='Crème de confort articulaire'
            />
          )}
          {step >= 4 && answerQ1 === 1 && answerQ2 === 3 && answerQ3 === 3 && (
            <Next
              navigation={navigation}
              imgPath={productsHalgusValgus.productOrtheseCorrectiveSport}
              desc={[
                "Durant l'activité physique, l’orthèse de sport pour l’hallux valgus EPITACT® a pour but de réaxer le gros orteil, de limiter la pronation et d’optimiser la propulsion.",
                'Attelle, redresseur, correcteur, orthèse corrective pour l’hallux valgus… Voici la panoplie des solutions disponibles qui visent à corriger et soulager un hallux valgus douloureux. Pourtant, rares sont celles qui peuvent se porter durant la pratique sportive. Développée pour s’insérer dans vos chaussures de sport, l’orthèse corrective hallux valgus EPITACT® limite la douleur et corrige la déformation de votre hallux valgus débutant tout en améliorant vos performances.',
              ]}
              productName='Orthèse Corrective Hallux Valgus Sport'
              littleDesc="Développée pour réaxer l'orteil durant la pratique sportive"
            />
          )}
          <View style={{ height: Dimensions.get('window').height / 5 }}></View>
        </ScrollView>
      )}
      <Navbar navigation={navigation} navPath='Home' />
    </View>
  );
};

export default HalluxValgusPieds;

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
