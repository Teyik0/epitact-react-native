import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React, { useState } from 'react';

const Product = ({ imgPath }) => {
  const [toggleProduct, setToggleProduct] = useState('white');
  return (
    <>
      <Pressable
        style={{
          ...styles.container,
          backgroundColor: toggleProduct,
        }}
        onPress={() => {
          setToggleProduct('gray');
          setTimeout(() => {
            setToggleProduct('white');
          }, 400);
        }}
      >
        <Text style={styles.textStyle}>
          Félicitation, le questionnaire est terminé !
        </Text>
        <Text style={styles.textStyle2}>
          Cliquez pour en savoir plus sur le produit proposé
        </Text>
      </Pressable>
      <View
        style={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: Dimensions.get('window').width,
        }}
      >
        <View style={styles.pruductContainer}>
          <Image
            source={imgPath}
            alt='Hallux Valgus'
            style={{ width: '100%', height: 'auto', aspectRatio: 0.66 }}
          />
        </View>
      </View>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  pruductContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#51A1FF',
    borderColor: 'gray',
    padding: 120,
    borderWidth: 2,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.3,
    position: 'absolute',
    left: -2,
    zIndex: 1,
  },
  textStyle2: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').width * 0.02,
    fontWeight: 'normal',
    fontStyle: 'italic',
    color: '#8c8c8c',
    marginTop: Dimensions.get('window').width * 0.01,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').width * 0.025,
    fontWeight: 'semi-bold',
  },
  container: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.7,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    marginBottom: Dimensions.get('window').height * 0.04,
  },
});
