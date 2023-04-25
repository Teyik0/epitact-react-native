import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Navbar, Carrousel } from "../components";
import { data } from "../utils/data";
import logo from "../assets/logo.png";

const Home = ({ navigation }: any) => {
  const [currentSympt, setCurrentSympt] = useState(0);
  const [isPressed, setIsPressed] = useState<boolean[]>([]);
  //Créer un nouveau tableau avec la même taille que le tableau de symptomes
  useEffect(() => {
    setIsPressed(
      new Array(data[currentSympt].symptomes.length).fill(false) as never[]
    );
  }, [currentSympt]);
  //Pour mettre le background en gris quand on a choisit le symptome
  const handleClickSympt = (index: number, item: any) => {
    setIsPressed([
      ...isPressed.slice(0, index),
      (isPressed[index] = true),
      ...isPressed.slice(index + 1),
    ]);
    setTimeout(() => {
      setIsPressed([
        ...isPressed.slice(0, index),
        (isPressed[index] = false),
        ...isPressed.slice(index + 1),
      ]);
      navigation.navigate(item.screen);
    }, 150);
    return true;
  };

  return (
    <View
      style={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={styles.logo}
        onStartShouldSetResponder={() => navigation.navigate("Welcome")}
      >
        <Image
          source={logo}
          style={{
            width: (Dimensions.get("window").width * 0.35) / 1.5,
            height: (Dimensions.get("window").width * 0.35) / 1.5 / 2,
          }}
        />
      </View>

      <View style={styles.mainContainer}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <View style={{ display: "flex" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: Dimensions.get("window").width * 0.045,
                marginTop: Dimensions.get("window").height / 60,
                // marginBottom: Dimensions.get('window').height / 60,
                color: "gray",
              }}
            >
              Touchez pour choisir votre symptôme
            </Text>
          </View>
          <View style={{ marginBottom: 64 }}>
            <Carrousel
              data={data}
              arrow={true}
              scrollOnObjectClick={true}
              pagination={true}
              setCurrentSympt={setCurrentSympt}
              currentSympt={currentSympt}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data[currentSympt].symptomes.map((item, index) => (
              <View
                key={index}
                style={{
                  ...styles.symptomeContainer,
                  backgroundColor: isPressed[index] ? "#C1C1C1" : "transparent",
                }}
                onStartShouldSetResponder={() => handleClickSympt(index, item)}
              >
                <Image
                  source={item.img}
                  style={{ width: "100%", height: "auto", aspectRatio: 1.05 }}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <Navbar navigation={navigation} navPath="Welcome" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  logo: {
    width: Dimensions.get("window").width * 0.35,
    height: (Dimensions.get("window").width * 0.35) / 2,
    borderBottomEndRadius: 300,
    borderBottomStartRadius: 300,
    backgroundColor: "#D9D9D9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    // top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    top: 0,
    zIndex: 10,
  },
  scrollView: {
    height: Dimensions.get("window").height,
  },
  mainContainer: {
    flex: 1,
  },
  symptomeContainer: {
    width: Dimensions.get("window").width / 3.5,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    margin: 12,
    borderRadius: 20,
  },
});
