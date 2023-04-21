import { View, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import logo from '../assets/logo.png';

interface TopContainerProps {
  isPressed: {
    startButton?: boolean;
    backButton: boolean;
    stopButton: boolean;
  };
  backToPreviousStep: () => void;
  returnToFirstStep: () => void;
  step?: number;                         
}

const TopContainer = ({
  isPressed,
  backToPreviousStep,
  returnToFirstStep,
  step,
}: TopContainerProps) => {
  return (
    <View style={styles.topContainer}>
      {/* Bouton back */}
      <Pressable
        style={{
          ...styles.containerBackIcons,
          backgroundColor: isPressed.backButton ? '#D9D9D9' : '#6892FF',
          opacity: step !== 0 ? 1 : 0,
        }}
        onPress={() => backToPreviousStep()}
      >
        <Ionicons
          name='arrow-back-outline'
          size={Dimensions.get('window').width * 0.08}
          color='white'
        />
      </Pressable>
      {/* Logo */}
      <View style={styles.logo}>
        <Image
          source={logo}
          style={{
            width: (Dimensions.get('window').width * 0.4) / 1.5,
            height: (Dimensions.get('window').width * 0.4) / 1.5 / 2,
          }}
        />
      </View>
      {/*Bouton stop */}
      <Pressable
        style={{
          ...styles.containerBackIcons,
          backgroundColor: isPressed.stopButton ? '#D9D9D9' : '#6892FF',
          opacity: 0,
        }}
        onPress={() => returnToFirstStep()}
      >
        <Ionicons
          name='close-outline'
          size={Dimensions.get('window').width * 0.1}
          color='white'
        />
      </Pressable>
    </View>
  );
};

export default TopContainer;

const styles = StyleSheet.create({
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerBackIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.12,
    height: Dimensions.get('window').width * 0.12,
    borderRadius: 100,
  },
  logo: {
    width: Dimensions.get('window').width * 0.4,
    height: (Dimensions.get('window').width * 0.4) / 2,
    borderBottomEndRadius: 300,
    borderBottomStartRadius: 300,
    backgroundColor: '#D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
