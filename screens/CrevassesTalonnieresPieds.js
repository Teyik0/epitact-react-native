import { View, Text, Button } from 'react-native';

const CrevassesTalonnieresPieds = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>In development...</Text>
      <Button title='Go to Menu' onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default CrevassesTalonnieresPieds;
