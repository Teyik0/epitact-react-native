import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
import logo from '../assets/logo.png';

const TopSymptContainer = ({ symptDesc }) => {
  return (
    <View style={styles.TopContainer}>
      <View style={styles.logo}>
        <Image
          source={logo}
          style={{
            width: Dimensions.get('window').width / 2.5 / 1.5,
            height: Dimensions.get('window').width / 5 / 1.5,
          }}
        />
      </View>
      <View style={styles.bigCircle} />
      <View style={styles.littleCircle} />
      <View
        style={{
          marginLeft: Dimensions.get('window').width * 0.03,
          marginRight: Dimensions.get('window').width * 0.08,
          marginTop: Dimensions.get('window').width * 0.06,
        }}
      >
        <Text
          style={{
            fontSize: Dimensions.get('window').width * 0.022,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: Dimensions.get('window').width * 0.022,
          }}
        >
          {symptDesc}
        </Text>
        <Text
          style={{
            fontSize: Dimensions.get('window').width * 0.018,
            color: 'white',
          }}
        >
          Les questions ci dessous vous guiderons afin de vous aidez à choisir
          le produit qui correspond le mieux à votre situation
        </Text>
      </View>
    </View>
  );
};

export default TopSymptContainer;

const styles = StyleSheet.create({
  TopContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: Dimensions.get('window').height / 4,
    left: 0,
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#51A1FF',
    borderBottomRightRadius: 100,
  },
  logo: {
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').width / 5,
    borderBottomEndRadius: Dimensions.get('window').width / 5,
    borderBottomStartRadius: Dimensions.get('window').width / 5,
    backgroundColor: '#D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    elevation: 30,
  },
  bigCircle: {
    width: 230,
    height: 230,
    borderRadius: 120,
    backgroundColor: '#D9D9D9',
    opacity: 0.3,
    position: 'absolute',
    top: -20,
    right: Dimensions.get('window').width * 0.12,
  },
  littleCircle: {
    width: 170,
    height: 170,
    borderRadius: 100,
    backgroundColor: '#CFFFCE',
    opacity: 0.2,
    position: 'absolute',
    top: 100,
    right: -10,
  },
});
