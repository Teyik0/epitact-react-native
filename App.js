import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, HalluxValgusPieds, CrevassesTalonnieresPieds } from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='HalluxValgusPieds' component={HalluxValgusPieds} />
        <Stack.Screen
          name='CrevassesTalonnieresPieds'
          component={CrevassesTalonnieresPieds}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
