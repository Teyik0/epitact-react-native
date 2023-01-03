import { View, Text, Button } from 'react-native';

const CrevassesTalonnieresPieds = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SymptScreen</Text>
      <Button
        title='Go to Details... again'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default CrevassesTalonnieresPieds;
