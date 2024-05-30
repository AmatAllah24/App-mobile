import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const RepasHimmi = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('EntreH')}>
          <Image source={require('./assets/entrees.jpeg')} style={styles.optionImage} />
          <Text style={styles.optionText}>Entrées</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DinerH')}>
          <Image source={require('./assets/repas.jpeg')} style={styles.optionImage} />
          <Text style={styles.optionText}>Repas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DessertH')}>
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
    paddingTop: 50,
  },
  logo: {
    width: 150,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 70,
  },
  searchInput: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 30,
  },
  optionsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  option: {
    alignItems: 'center',
    marginVertical: 15,
  },
  optionImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default RepasHimmi;
