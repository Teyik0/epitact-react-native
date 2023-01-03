import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ textTransform: 'uppercase' }}>Précautions</Text>
      </View>
      <View>
        <Text style={{ textTransform: 'uppercase' }}>Sélection</Text>
      </View>
      <View style={{ width: 80 }}>
        <View
          style={{
            backgroundColor: '#BBFFF7',
            width: 80,
            height: 70,
            borderRadius: 40,
            position: 'absolute',
            bottom: -10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 3.5,
          }}
          onStartShouldSetResponder={() => navigation.navigate('Home')}
        >
          <Ionicons name='home' size={32} color='black' />
          <Text style={{ textTransform: 'uppercase' }}>Home</Text>
        </View>
      </View>
      <View>
        <Text style={{ textTransform: 'uppercase' }}>Recherche</Text>
      </View>
      <View>
        <Text style={{ textTransform: 'uppercase' }}>à propos</Text>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#B9B9BD',
    marginLeft: 20,
    marginRight: 20,
    width: '100%',
    padding: 16,
  },
});
