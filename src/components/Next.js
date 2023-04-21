import { View, Text, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const Next = ({ navigation, product }) => {
  const [pressed, setPressed] = useState(false);
  const goNext = () => {
    setPressed(true);
    setTimeout(() => {
      navigation.navigate('Products', {
        product: product,
      });
      setPressed(false);
    }, 300);
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
    <View
      style={{
        width: '100%',
        marginTop: Dimensions.get('window').width * 0.05,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Animated.View
        style={[
          {
            width: '30%',
            backgroundColor: pressed ? '#5C8E5B' : '#6EC36C',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 500,
            padding: 20,
          },
          animatedStyle,
        ]}
        onStartShouldSetResponder={() => goNext()}
      >
        <Text
          style={{
            fontSize: Dimensions.get('window').width * 0.028,
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Suivant
        </Text>
        <Ionicons
          name='arrow-forward-outline'
          size={Dimensions.get('window').width * 0.05}
          color='white'
        />
      </Animated.View>
    </View>
  );
};

export default Next;
