import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Welcome,
  Home,
  HalluxValgusPieds,
  Products,
  CanalCarpien,
  Rhizarthrose,
  Cors,
  Gonarthrose,
  TendiniteDeQuervain,
} from "./src/screens";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="HalluxValgusPieds" component={HalluxValgusPieds} />
        <Stack.Screen name="CanalCarpien" component={CanalCarpien} />
        <Stack.Screen name="Rhizarthrose" component={Rhizarthrose} />
        <Stack.Screen name="Cors" component={Cors} />
        <Stack.Screen name="Gonarthrose" component={Gonarthrose} />
        <Stack.Screen
          name="TendiniteDeQuervain"
          component={TendiniteDeQuervain}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
