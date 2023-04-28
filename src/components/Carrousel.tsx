import {
  View,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
  Pressable,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  useAnimatedRef,
} from "react-native-reanimated";
import React, { useState } from "react";
import Pagination from "./Pagination";
import ArrowForCarroussel from "./ArrowForCarroussel";

const Carrousel = ({
  data,
  setCurrentSympt,
  currentSympt,
  pagination,
  arrow,
  scrollOnObjectClick,
}: any) => {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const [newData] = useState([
    { key: "spacer-left" },
    ...data,
    { key: "spacer-right" },
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

  const setNextSympt = (_offSet: number) => {
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

  const goBefore = () => {
    if (currentSympt === 0) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
      offSet.value = size * 4;
      setCurrentSympt(4);
    } else {
      offSet.value = offSet.value - size;
      scrollViewRef.current?.scrollTo({
        x: offSet.value - size,
        animated: true,
      });
      setCurrentSympt((prev: number) => prev - 1);
    }
    // console.log("offset.value:", offSet.value);
    // console.log("symptome:", currentSympt);
  };

  const goNext = () => {
    if (currentSympt === 4) {
      scrollViewRef.current?.scrollTo({ x: 0, animated: true });
      offSet.value = 0;
      setCurrentSympt(0);
    } else {
      offSet.value = offSet.value + size;
      scrollViewRef.current?.scrollTo({
        x: offSet.value + size,
        animated: true,
      });
      setCurrentSympt((prev: number) => prev + 1);
    }
    // console.log("offset.value:", offSet.value);
    // console.log("symptome:", currentSympt);
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
        decelerationRate="fast"
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
              [0.6, 1.18, 0.6]
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
                <Animated.Image source={item.img} style={styles.image} />
              </Animated.View>
            </View>
          );
        })}
      </Animated.ScrollView>
      {scrollOnObjectClick && (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            width: "100%",
            top: "20%",
          }}
        >
          <Pressable
            style={{
              backgroundColor: "transparent",
              display: "flex",
              transform: [{ rotate: "180deg" }],
              height: Dimensions.get("window").height * 0.15,
              width: Dimensions.get("window").width * 0.25,
            }}
            onPress={() => goBefore()}
          />
          <Pressable
            style={{
              backgroundColor: "transparent",
              display: "flex",
              transform: [{ rotate: "180deg" }],
              height: Dimensions.get("window").height * 0.15,
              width: Dimensions.get("window").width * 0.25,
            }}
            onPress={() => goNext()}
          />
        </View>
      )}
      {arrow && <ArrowForCarroussel goNext={goNext} goBefore={goBefore} />}
      {pagination && <Pagination data={data} x={x} size={size} />}
    </View>
  );
};

export default Carrousel;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 64,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1.08,
  },
});
