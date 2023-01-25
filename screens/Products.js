import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Navbar } from '../components';

const Products = ({ route, navigation }) => {
  const { imgPath, desc, littleDesc, productName } = route.params;
  const [timerDone, setTimerDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimerDone(true);
    }, 3 * 60 * 1000);
  }, []);
  return (
    <>
      <View
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.bigCircle} />
        <View style={styles.littleCircle} />
        <View
          style={styles.logo}
          onStartShouldSetResponder={() => navigation.navigate('Welcome')}
        >
          <Image
            source={logo}
            style={{
              width: (Dimensions.get('window').width * 0.4) / 1.5,
              height: (Dimensions.get('window').width * 0.4) / 1.5 / 2,
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '90%',
            marginBottom: 40,
            paddingTop: 30,
            paddingBottom: 30,
            borderRadius: 50,
            backgroundColor: '#6892FF',
            elevation: 4,
          }}
        >
          <View style={{ width: '40%' }}>
            <Text
              style={{
                fontSize: Dimensions.get('window').width * 0.03,
                textTransform: 'uppercase',
                marginBottom: 40,
                fontWeight: 'bold',
              }}
            >
              {productName}
            </Text>
            <Text
              style={{
                fontSize: Dimensions.get('window').width * 0.03,
                textAlign: 'left',
                marginTop: 20,
                fontStyle: 'italic',
                fontWeight: 'semibold',
                opacity: 0.75,
              }}
            >
              {littleDesc}
            </Text>
          </View>
          <Image
            source={JSON.stringify(imgPath)}
            alt='Hallux Valgus'
            style={{
              width: '30%',
              height: 'auto',
              aspectRatio: 0.66,
              marginTop: 20,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#6892FF',
            width: '90%',
            paddingTop: 30,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 10,
            elevation: 4,
            borderRadius: 50,
          }}
        >
          {desc &&
            desc.map((item, index) => (
              <Text
                key={index}
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  marginBottom: 20,
                  fontSize: Dimensions.get('window').width * 0.022,
                }}
              >
                {item}
              </Text>
            ))}
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
  pruductContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#D9D9D9',
    borderColor: 'gray',
    padding: 120,
    borderWidth: 2,
    borderRadius: 40,
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.3,
    marginTop: Dimensions.get('window').height * 0.01,
    zIndex: 1,
  },
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
  logo: {
    width: Dimensions.get('window').width * 0.4,
    height: (Dimensions.get('window').width * 0.4) / 2,
    borderBottomEndRadius: 300,
    borderBottomStartRadius: 300,
    backgroundColor: '#D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 10,
  },
});
