import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const SeventhPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Rahal1')}>
        <Image source={require('./assets/buffet.jpeg')} style={styles.optionImage} />
        <Text style={styles.optionText}>Buffet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Rahal1')}>
        <Image source={require('./assets/tables.jpeg')} style={styles.optionImage} />
        <Text style={styles.optionText}>Sur tables</Text>
      </TouchableOpacity>
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
    width: 200,
    height: 100,
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

export default SeventhPage;
