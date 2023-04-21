import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import React from 'react';

const Pagination = ({ data, x, size }: any) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((item: any, index: number) => {
        const animateDotStyle = useAnimatedStyle(() => {
          const widthAnimation = interpolate(
            x.value,
            [(index - 1) * size, index * size, (index + 1) * size],
            [10, 20, 10],
            Extrapolate.CLAMP
          );
          const opacityAnimation = interpolate(
            x.value,
            [(index - 1) * size, index * size, (index + 1) * size],
            [0.5, 1, 0.5],
            Extrapolate.CLAMP
          );
          return {
            width: widthAnimation,
            opacity: opacityAnimation,
          };
        });
        return (
          <Animated.View style={[styles.dots, animateDotStyle]} key={index} />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  dots: {
    display: 'flex',
    height: 10,
    width: 10,
    backgroundColor: '#C8C8EC',
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
