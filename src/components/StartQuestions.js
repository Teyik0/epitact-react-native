import Animated, {
  useAnimatedStyle,
  FadeInDown,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';

const StartQuestions = ({ isPressed, startQuestions }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withRepeat(
          withSequence(withTiming(20), withTiming(0)),
          -1,
          true
        ),
      },
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.View
        style={styles.welcomeContainer}
        entering={FadeInDown.duration(500)}
      >
        <View style={styles.welcome2Container}>
          <Text
            style={{
              color: 'white',
              fontSize: Dimensions.get('window').width * 0.04,
              textAlign: 'center',
              marginTop: 10,
              fontWeight: 'bold',
            }}
          >
            Bienvenue sur le questionnaire Epitact
          </Text>
          <Text
            style={{
              color: '#6EC36C',
              fontSize: Dimensions.get('window').width * 0.03,
              margin: 10,
              textAlign: 'center',
            }}
          >
            Dites-nous quels sont vos besoins de santé et vos symptômes, nous
            vous conseillerons les produits qui vous conviennent le mieux
          </Text>
        </View>
        <Animated.View
          style={[
            {
              ...styles.containerStartQuestion,
              backgroundColor: isPressed.startButton ? '#5C8E5B' : '#6EC36C',
            },
            animatedStyle,
          ]}
          onStartShouldSetResponder={() => startQuestions()}
        >
          <Text
            style={{
              ...styles.textStyle,
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Démarrer le questionnaire
          </Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default StartQuestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  welcomeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome2Container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: '#4A88D0',
    borderRadius: 35,
    marginBottom: 20,
    height: Dimensions.get('window').height * 0.15,
  },
  containerStartQuestion: {
    height: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').width * 0.5,
    borderRadius: 100,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').width * 0.03,
    fontWeight: 'semi-bold',
  },
});
