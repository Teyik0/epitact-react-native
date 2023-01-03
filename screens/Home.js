import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { Navbar, Carrousel } from '../components';
import { data } from '../utils/data';
import logo from '../assets/logo.png';

const Home = ({ navigation }) => {
  const [currentSympt, setCurrentSympt] = useState(0);
  return (
    <View
      style={{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={styles.logo}>
        <Image source={logo} style={{ width: 200, height: 100 }} />
      </View>

      <View style={styles.mainContainer}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        >
          <View style={{ display: 'flex' }}>
            <Text style={{ textAlign: 'center', fontSize: 32, color: 'gray' }}>
              Trouvez une solution selon votre symptôme
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                marginTop: 32,
                color: 'gray',
                fontStyle: 'italic',
              }}
            >
              Touchez pour choisir
            </Text>
          </View>
          <View style={{ marginBottom: 64 }}>
            <Carrousel
              data={data}
              pagination={true}
              setCurrentSympt={setCurrentSympt}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {data[currentSympt].symptomes.map((item, index) => {
              return (
                <View
                  key={index}
                  style={styles.symptomeContainer}
                  onStartShouldSetResponder={() =>
                    navigation.navigate(item.screen)
                  }
                >
                  <Image
                    source={item.img}
                    style={{ width: '100%', height: 'auto', aspectRatio: 1.05 }}
                  />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <Navbar navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 150,
    borderBottomEndRadius: 150,
    borderBottomStartRadius: 150,
    backgroundColor: '#D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollView: {
    height: Dimensions.get('window').height,
  },
  mainContainer: {
    flex: 1,
  },
  symptomeContainer: {
    width: Dimensions.get('window').width / 3.5,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 12,
    borderRadius: 20,
  },
});
