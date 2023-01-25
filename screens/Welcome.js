import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import logo from '../assets/logo.png';
import im2 from '../assets/2.png';

const Welcome = ({ navigation }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => {
      navigation.navigate('Home');
      setIsPressed(false);
    }, 10);
  };
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={im2}
        style={{
          position: 'absolute',
          top: 0,
          left: 70,
          transform: [{ rotate: '90deg' }],
          width: Dimensions.get('window').width * 0.25,
          height: Dimensions.get('window').width * 0.45,
        }}
      />
      <Image
        source={im2}
        style={{
          position: 'absolute',
          top: 0,
          right: 70,
          transform: [{ rotate: '-90deg' }],
          width: Dimensions.get('window').width * 0.25,
          height: Dimensions.get('window').width * 0.45,
        }}
      />
      <View style={styles.logo}>
        <Image
          source={logo}
          style={{
            width: (Dimensions.get('window').width * 0.4) / 1.5,
            height: (Dimensions.get('window').width * 0.4) / 1.5 / 2,
          }}
        />
      </View>
      <Ionicons
        name='shield-outline'
        size={Dimensions.get('window').width}
        style={{ position: 'relative', display: 'flex' }}
        color='#6EC36C'
      />
      <View
        style={{
          width: Dimensions.get('window').width * 0.9,
          backgroundColor: '#4A88D0',
          position: 'absolute',
          borderRadius: 35,
          padding: Dimensions.get('window').width * 0.05,
        }}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: Dimensions.get('window').width * 0.04,
            fontWeight: 'bold',
          }}
        >
          Bienvenue sur la borne Epitact
        </Text>
        <Text
          style={{
            color: '#6EC36C',
            textAlign: 'center',
            fontSize: Dimensions.get('window').width * 0.038,
            marginTop: 10,
          }}
        >
          Borne conseil santé par symptômes observés
        </Text>
      </View>
      <Animated.View
        style={[
          {
            backgroundColor: isPressed ? '#5C8E5B' : '#6EC36C',
            padding: Dimensions.get('window').width * 0.02,
            width: Dimensions.get('window').width * 0.4,
            borderRadius: 400,
            elevation: 3,
          },
          animatedStyle,
        ]}
        onStartShouldSetResponder={() => handleClick()}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: Dimensions.get('window').width * 0.04,
            fontWeight: 'bold',
          }}
        >
          Démarrer
        </Text>
      </Animated.View>
      <Text style={{ position: 'absolute', bottom: 10 }}>
        Epitact App - Version Démo
      </Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  logo: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    borderRadius: 400,
    backgroundColor: '#D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Dimensions.get('window').height * 0.223,
  },
});
