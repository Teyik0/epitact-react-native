import { View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const Navbar = ({ navigation }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
      }}
    >
      <View
        style={{
          backgroundColor: !isPressed ? '#6892FF' : '#004698',
          width: Dimensions.get('window').width * 0.12,
          height: Dimensions.get('window').width * 0.12,
          borderRadius: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          transform: [{ translateY: -20 }],
        }}
        onStartShouldSetResponder={() => {
          setIsPressed(true);
          setTimeout(() => {
            setIsPressed(false);
            navigation.navigate('Home');
          }, 150);
        }}
      >
        <Ionicons
          name='home'
          size={Dimensions.get('window').width * 0.06}
          color='white'
        />
      </View>
    </View>
  );
};

export default Navbar;
