import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  useAnimatedRef,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import React, { useState } from 'react';
import { Pagination } from './';

const Carrousel = ({ data, pagination, setCurrentSympt }) => {
  const scrollViewRef = useAnimatedRef();
  const [newData] = useState([
    { key: 'spacer-left' },
    ...data,
    { key: 'spacer-right' },
  ]);

  const { width } = useWindowDimensions();
  const size = width * 0.4; //width * 2/5 = 40% de la largeur de l'écran
  const SPACER_SIZE = (width - size) / 2; //30%
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const setNextSympt = (_offSet) => {
    if (_offSet === 0) {
      setCurrentSympt(0);
    } else if (
      _offSet >= Math.floor(size - 10) &&
      _offSet < Math.floor(size * 2 - 10)
    ) {
      setCurrentSympt(1);
    } else if (
      _offSet >= Math.floor(size * 2 - 10) &&
      _offSet < Math.floor(size * 3 - 10)
    ) {
      setCurrentSympt(2);
    } else if (
      _offSet >= Math.floor(size * 3 - 10) &&
      _offSet < Math.floor(size * 4 - 10)
    ) {
      setCurrentSympt(3);
    } else if (_offSet >= Math.floor(size * 4 - 10)) {
      setCurrentSympt(4);
    }
  };

  //ANIMATION DE SHRINK AU CLICK
  // const rotation = useSharedValue(0);
  // handleShrink = () => {
  //   rotation.value = withSequence(
  //     withTiming(-10, { duration: 50 }),
  //     withRepeat(withTiming(10, { duration: 100 }), 2, true),
  //     withTiming(0, { duration: 50 })
  //   );
  // };

  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        snapToInterval={size}
        decelerationRate='fast'
        onScroll={onScroll}
        onMomentumScrollEnd={(e) => {
          offSet.value = e.nativeEvent.contentOffset.x;
          setNextSympt(offSet.value);
        }}
        snapToEnd={false}
        snapToStart={false}
      >
        {newData.map((item, index) => {
          const style = useAnimatedStyle(() => {
            const scale = interpolate(
              x.value,
              [(index - 2) * size, (index - 1) * size, index * size],
              [0.6, 1.18, 0.6]
            );
            return {
              transform: [{ scale }], //, { rotateZ: `${rotation.value}deg` }
            };
          });
          if (!item.img) {
            return <View style={{ width: SPACER_SIZE }} key={index} />;
          }
          return (
            <View style={{ width: size }} key={index}>
              <Animated.View
                style={[styles.imageContainer, style]}
                // onStartShouldSetResponder={() => handleShrink()}
              >
                <Animated.Image source={item.img} style={styles.image} />
              </Animated.View>
            </View>
          );
        })}
      </Animated.ScrollView>
      {pagination && <Pagination data={data} x={x} size={size} />}
    </View>
  );
};

export default Carrousel;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1.08,
  },
});
