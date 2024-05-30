import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const FourthPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Fifth')}>
          <Image source={require('./assets/mariage.jpeg')} style={styles.optionImage} />
          <Text style={styles.optionText}>Mariage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Fifth')}>
          <Image source={require('./assets/fiancailles.jpeg')} style={styles.optionImage} />
          <Text style={styles.optionText}>Fiancailles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Fifth')}>
          <Image source={require('./assets/anniversaire.jpeg')} style={styles.optionImage} />
          <Text style={styles.optionText}>Anniversaire</Text>
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
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
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

export default FourthPage;
