import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  useAnimatedRef,
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
  const size = width * 0.4;
  const SPACER_SIZE = (width - size) / 2;
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
      >
        {newData.map((item, index) => {
          const style = useAnimatedStyle(() => {
            const scale = interpolate(
              x.value,
              [(index - 2) * size, (index - 1) * size, index * size],
              [0.7, 1.18, 0.7]
            );
            return {
              transform: [{ scale }],
            };
          });
          if (!item.img) {
            return <View style={{ width: SPACER_SIZE }} key={index} />;
          }
          return (
            <View style={{ width: size }} key={index}>
              <Animated.View style={[styles.imageContainer, style]}>
                <Image source={item.img} style={styles.image} />
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
  },
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1.08,
  },
});
