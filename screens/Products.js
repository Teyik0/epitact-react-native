import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Navbar, TopContainer } from '../components';

const Products = ({ route, navigation }) => {
  const { product } = route.params;
  const { productName, littleDescription, price, description, imgPath } =
    product;
  const [timerDone, setTimerDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimerDone(true);
    }, 3 * 60 * 1000);
  }, []);

  const [isPressed, setIsPressed] = useState({
    backButton: false,
    stopButton: false,
  }); //état des boutons start, retour et stop
  const backToPreviousStep = () => {
    setIsPressed({ ...isPressed, backButton: true });
    setTimeout(() => {
      setIsPressed({ ...isPressed, backButton: false });
      navigation.goBack();
    }, 100);
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TopContainer
          isPressed={isPressed}
          backToPreviousStep={backToPreviousStep}
          hide={true}
        />
        <View style={styles.bigCircle} />
        <View style={styles.littleCircle} />

        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: '90%',
              marginBottom: 40,
              borderRadius: Dimensions.get('window').width * 0.06,
              paddingTop: 20,
              paddingBottom: 20,
              backgroundColor: '#DFEBF9',
              elevation: 4,
            }}
          >
            <View
              style={{
                width: '40%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.037,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                }}
              >
                {productName}
              </Text>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.03,
                  textAlign: 'left',
                  fontStyle: 'italic',
                  fontWeight: 'semibold',
                  opacity: 0.75,
                  marginTop: Dimensions.get('window').height * 0.07,
                }}
              >
                {littleDescription}
              </Text>
              <Text
                style={{
                  fontSize: Dimensions.get('window').width * 0.03,
                  textAlign: 'left',
                  fontStyle: 'italic',
                  fontWeight: 'semibold',
                  color: 'black',
                  opacity: 0.75,
                  marginTop: Dimensions.get('window').height * 0.1,
                }}
              >
                {`Prix : ${price}`}
              </Text>
            </View>

            <Image
              source={JSON.stringify(imgPath)}
              alt='Hallux Valgus'
              style={{
                width: '40%',
                height: 'auto',
                aspectRatio: 0.67,
                marginTop: 20,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#DFEBF9',
              width: '90%',
              paddingTop: Dimensions.get('window').height * 0.02,
              paddingBottom: 0,
              paddingLeft: Dimensions.get('window').width * 0.02,
              paddingRight: Dimensions.get('window').width * 0.02,
              elevation: 4,
              borderRadius: Dimensions.get('window').width * 0.06,
              position: 'absolute',
              bottom: 30,
            }}
          >
            {description &&
              description.map((item, index) => (
                <Text
                  key={index}
                  style={{
                    paddingLeft: Dimensions.get('window').width * 0.03,
                    paddingRight: Dimensions.get('window').width * 0.03,
                    marginBottom: Dimensions.get('window').height * 0.02,
                    fontSize: Dimensions.get('window').width * 0.02,
                  }}
                >
                  {item}
                </Text>
              ))}
          </View>
        </View>
      </View>
      <Navbar
        navigation={navigation}
        navPath={timerDone ? 'Welcome' : 'Home'}
      />
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  bigCircle: {
    width: Dimensions.get('window').height * 0.6,
    height: Dimensions.get('window').height * 0.6,
    borderRadius: 1000,
    backgroundColor: '#6892FF',
    opacity: 0.5,
    position: 'absolute',
    top: Dimensions.get('window').height * 0.14,
    right: Dimensions.get('window').width * 0.14,
    left: -150,
    zIndex: -1,
  },
  littleCircle: {
    width: Dimensions.get('window').height * 0.47,
    height: Dimensions.get('window').height * 0.47,
    borderRadius: 1000,
    backgroundColor: '#6EC36C',
    opacity: 0.4,
    position: 'absolute',
    top: Dimensions.get('window').height * 0.48,
    right: -200,
  },
});
