import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { Navbar, Product, Questions, TopSymptContainer } from '../components';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import halluxValgusPieds from '../assets/img/pieds/hallux-valgus.png';
import { productsHalgusValgus } from '../utils/data';

const HalluxValgusPieds = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const [toggleStart, setToggleStart] = useState('white'); //couleur du bouton start
  const backToPreviousStep = () => {
    if (step !== 0) {
      setToggleStart('white');
      setStep((prev) => prev - 1);
    }
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
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TopSymptContainer
        symptDesc='L’hallux valgus est une déformation de
        l’articulation du gros orteil que l’on appelle aussi communément « oignon » au pied.
        Le gros orteil se rapproche de son voisin et peut même aller jusqu’à le chevaucher.'
      />
      <View style={styles.containerSearchIcons}>
        <Ionicons
          name='search'
          size={Dimensions.get('window').width * 0.08}
          color='white'
        />
      </View>
      <Pressable
        style={styles.containerBackIcons}
        onPress={() => backToPreviousStep()}
      >
        <Ionicons
          name='arrow-back-outline'
          size={Dimensions.get('window').width * 0.08}
          color='white'
        />
      </Pressable>
      <View style={styles.bigCircle} />
      <View style={styles.littleCircle} />
      {step === 0 && (
        <Pressable
          style={{
            ...styles.containerStartQuestion,
            backgroundColor: toggleStart,
          }}
          onPress={() => {
            setToggleStart('gray');
            setTimeout(() => {
              setStep((prev) => prev + 1);
            }, 400);
          }}
        >
          <Text style={styles.textStyle}>Démarrer le questionnaire</Text>
        </Pressable>
      )}
      {step === 1 && (
        <Questions
          question1='Gros orteil mobile ?'
          question2='Gros orteil immobile ?'
          setAnswer={setAnswerQ1}
          setStep={setStep}
          backToPreviousStep={backToPreviousStep}
        />
      )}
      {step === 2 && answerQ1 === 1 && (
        <Questions
          question1='Nécessité de calmer la douleur'
          question2='Nécessité de séparer les orteils'
          question3='Nécessité de corriger la déformation et limiter son évolution'
          setAnswer={setAnswerQ2}
          setStep={setStep}
          backToPreviousStep={backToPreviousStep}
        />
      )}
      {step === 2 && answerQ1 === 2 && (
        <Questions
          question1='Nécessité de répartir les pression ?'
          question2='Nécessité de calmer la douleur ?'
          question3='Les deux ?'
          setAnswer={setAnswerQ2}
          setStep={setStep}
          backToPreviousStep={backToPreviousStep}
        />
      )}
      {step === 3 && answerQ1 === 2 && answerQ2 === 1 && (
        <Questions
          question1='Usage occasionnel ?'
          question2='Douleurs chroniques ou permanentes ?'
          setAnswer={setAnswerQ3}
          setStep={setStep}
          backToPreviousStep={backToPreviousStep}
        />
      )}
      {step === 4 && answerQ1 === 2 && answerQ2 === 1 && answerQ3 === 1 && (
        <Product imgPath={productsHalgusValgus.productKitHV} />
      )}
      {step === 4 && answerQ1 === 2 && answerQ2 === 1 && answerQ3 === 2 && (
        <Questions
          question1='Associées à des douleurs plantaires ?'
          question2='Non associées à des douleurs plantaires ?'
          setAnswer={setAnswerQ4}
          setStep={setStep}
          backToPreviousStep={backToPreviousStep}
        />
      )}
      {step === 5 &&
        answerQ1 === 2 &&
        answerQ2 === 1 &&
        answerQ3 === 2 &&
        answerQ4 === 1 && (
          <Product imgPath={productsHalgusValgus.productCoussinetDouble} />
        )}
      {step === 5 &&
        answerQ1 === 2 &&
        answerQ2 === 1 &&
        answerQ3 === 2 &&
        answerQ4 === 2 && (
          <Product imgPath={productsHalgusValgus.productProtector} />
        )}
      {step === 3 && answerQ1 === 2 && answerQ2 === 2 && (
        <Product
          imgPath={productsHalgusValgus.productCremeConfortArticulaire}
        />
      )}
      {step === 3 && answerQ1 === 2 && answerQ2 === 3 && (
        <Product imgPath={productsHalgusValgus.productKitHV} />
      )}
      {step === 3 && answerQ1 === 1 && answerQ2 === 1 && (
        <Product
          imgPath={productsHalgusValgus.productCremeConfortArticulaire}
        />
      )}
      {step === 3 && answerQ1 === 1 && answerQ2 === 2 && (
        <Product imgPath={productsHalgusValgus.productEcarteurs} />
      )}
      {step === 3 && answerQ1 === 1 && answerQ2 === 3 && (
        <Questions
          question1='Le jour ?'
          question2='La nuit ?'
          question3='Pendant la pratique sportive ?'
          setAnswer={setAnswerQ3}
          setStep={setStep}
          backToPreviousStep={backToPreviousStep}
        />
      )}
      {step === 4 && answerQ1 === 1 && answerQ2 === 3 && answerQ3 === 1 && (
        <Questions
          question1='Associées à des douleurs plantaires ?'
          question2='Non associées à des douleurs plantaires ?'
          setAnswer={setAnswerQ4}
          setStep={setStep}
          backToPreviousStep={backToPreviousStep}
        />
      )}
      {step === 5 &&
        answerQ1 === 1 &&
        answerQ2 === 3 &&
        answerQ3 === 1 &&
        answerQ4 === 1 && (
          <Product
            imgPath={productsHalgusValgus.productOrtheseCorrectiveDouble}
          />
        )}
      {step === 5 &&
        answerQ1 === 1 &&
        answerQ2 === 3 &&
        answerQ3 === 1 &&
        answerQ4 === 2 && (
          <Product
            imgPath={productsHalgusValgus.productOrtheseCorrectiveJour}
          />
        )}
      {step === 4 && answerQ1 === 1 && answerQ2 === 3 && answerQ3 === 2 && (
        <Product
          imgPath={productsHalgusValgus.productCremeConfortArticulaire}
        />
      )}
      {step === 4 && answerQ1 === 1 && answerQ2 === 3 && answerQ3 === 3 && (
        <Product imgPath={productsHalgusValgus.productOrtheseCorrectiveSport} />
      )}

      <View style={styles.container}>
        <View style={styles.pruductContainer}>
          <Ionicons
            name='cube'
            size={Dimensions.get('window').width * 0.25}
            color='gray'
          />
          <Text
            style={{
              color: 'gray',
              fontStyle: 'italic',
              fontSize: Dimensions.get('window').width * 0.02,
              width: Dimensions.get('window').width * 0.44,
              textAlign: 'center',
            }}
          >
            {step === 0
              ? 'Démarrer le questionnaire pour trouver le produit dont vous avez besoin'
              : 'En attente de vos réponses...'}
          </Text>
        </View>
        <View style={styles.symptContainer}>
          <Image
            source={halluxValgusPieds}
            alt='Hallux Valgus'
            style={{ width: '100%', height: 'auto', aspectRatio: 1.05 }}
          />
        </View>
      </View>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default HalluxValgusPieds;

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').width * 0.025,
    fontWeight: 'semi-bold',
  },
  containerStartQuestion: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.7,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    marginBottom: Dimensions.get('window').height * 0.04,
  },
  containerBackIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.12,
    height: Dimensions.get('window').height * 0.08,
    borderTopRightRadius: 70,
    borderBottomRightRadius: 70,
    backgroundColor: '#51A1FF',
    position: 'absolute',
    left: 0,
    top: Dimensions.get('window').height * 0.31,
  },
  containerSearchIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.12,
    height: Dimensions.get('window').height * 0.08,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#51A1FF',
    position: 'absolute',
    right: 0,
    top: Dimensions.get('window').height * 0.31,
  },
  symptContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    borderColor: 'gray',
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').height * 0.15,
    position: 'absolute',
    right: -2,
    backgroundColor: '#ECECEC',
    padding: 10,
  },
  pruductContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ECECEC',
    borderColor: 'gray',
    borderOpacity: 0.4,
    borderWidth: 2,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderStyle: 'dashed',
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.3,
    position: 'absolute',
    left: -2,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    position: 'relative',
    width: Dimensions.get('window').width,
  },
  bigCircle: {
    width: 700,
    height: 700,
    borderRadius: 350,
    backgroundColor: '#FFE9B0',
    opacity: 0.2,
    position: 'absolute',
    top: Dimensions.get('window').height * 0.2,
    right: Dimensions.get('window').width * 0.12,
    left: -100,
    zIndex: -1,
  },
  littleCircle: {
    width: 550,
    height: 550,
    borderRadius: 300,
    backgroundColor: '#FFA1A1',
    opacity: 0.1,
    position: 'absolute',
    top: Dimensions.get('window').height * 0.5,
    right: -100,
  },
});
