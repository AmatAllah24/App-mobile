import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const RepasRahal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('EntreeRahal')}>
          <Image source={require('./assets/entrees.jpeg')} style={styles.optionImage} />
          <Text style={styles.optionText}>Entrées</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DinerRahal')}>
          <Image source={require('./assets/repas.jpeg')} style={styles.optionImage} />
          <Text style={styles.optionText}>Repas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DessertRahal')}>
          <Image source={require('./assets/dessert.jpeg')} style={styles.optionImage} />
          <Text style={styles.optionText}>Desserts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f4f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 140,
    marginBottom: 220,
  },
  searchInput: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#f5ebe0',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  option: {
    alignItems: 'center',
  },
  optionImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RepasRahal;
