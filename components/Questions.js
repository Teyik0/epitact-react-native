import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import Animated from 'react-native-reanimated';

const Questions = ({
  question1,
  question2,
  question3,
  setAnswer,
  setStep,
  backToPreviousStep,
}) => {
  const [toggle1, setToggle1] = useState('white');
  const [toggle2, setToggle2] = useState('white');
  const [toggle3, setToggle3] = useState('white');
  const handleClick1 = () => {
    setToggle1('gray');
    setTimeout(() => {
      setAnswer(1);
      setStep((prev) => prev + 1);
    }, 400);
  };
  const handleClick2 = () => {
    setToggle2('gray');
    setTimeout(() => {
      setAnswer(2);
      setStep((prev) => prev + 1);
    }, 400);
  };
  const handleClick3 = () => {
    setToggle3('gray');
    setTimeout(() => {
      setAnswer(3);
      setStep((prev) => prev + 1);
    }, 400);
  };
  useEffect(() => {
    setToggle1('white');
    setToggle2('white');
    setToggle3('white');
  }, [backToPreviousStep]);

  return (
    <Animated.View>
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 15,
          fontStyle: 'italic',
          color: 'gray',
          fontSize: Dimensions.get('window').width * 0.025,
        }}
      >
        Cliquez pour répondre
      </Text>
      <View style={styles.container}>
        <Pressable
          onPress={handleClick1}
          style={
            question3
              ? { ...styles.questionBlockThree, backgroundColor: toggle1 }
              : { ...styles.questionBlock, backgroundColor: toggle1 }
          }
        >
          <Text style={styles.textStyle}>{question1}</Text>
        </Pressable>
        <Pressable
          onPress={handleClick2}
          style={
            question3
              ? { ...styles.questionBlockThree, backgroundColor: toggle2 }
              : { ...styles.questionBlock, backgroundColor: toggle2 }
          }
        >
          <Text style={styles.textStyle}>{question2}</Text>
        </Pressable>
        {question3 && (
          <Pressable
            onPress={handleClick3}
            style={{ ...styles.questionBlockThree, backgroundColor: toggle3 }}
          >
            <Text style={styles.textStyle}>{question3}</Text>
          </Pressable>
        )}
      </View>
    </Animated.View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: Dimensions.get('window').width,
    marginBottom: Dimensions.get('window').height * 0.04,
  },
  questionBlock: {
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').height * 0.1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionBlockThree: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').width * 0.025,
    fontWeight: 'semi-bold',
  },
});
