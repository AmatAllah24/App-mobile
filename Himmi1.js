import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const Himmi1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/himmi.jpeg')} style={styles.headerImage} />
      <Text style={styles.headerText}>Himmi Traiteur</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('RepasHimmi')}
      >
        <Text style={styles.optionText}>Repas</Text>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>➔</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('AssiettesH')}>
        <Text style={styles.optionText}>Assiettes</Text>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>➔</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('TableH')}>
        <Text style={styles.optionText}>Mises en places</Text>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>➔</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('TapiH')}>
        <Text style={styles.optionText}>Tapis</Text>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>➔</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f4f2',
    padding: 20,
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "light",
    color: 'black',
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#d9d0c7',
  },
  option: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#d9d0c7',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  arrowContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: '#fff',
    fontSize: 18,
  },
});
export default Himmi1;
