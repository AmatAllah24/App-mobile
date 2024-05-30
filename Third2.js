import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Third2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>⬅️</Text>
      </TouchableOpacity>
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Text style={styles.inputIcon}>💳</Text>
        <TextInput placeholder="Mode de paiement" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputIcon}>🔢</Text>
        <TextInput placeholder="Mon numéro de compte" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputIcon}>📞</Text>
        <TextInput placeholder="Mon numéro de téléphone" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputIcon}>🔒</Text>
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Third3')}>
        <Text style={styles.nextButtonText}>Suivant</Text>
      </TouchableOpacity>
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDot} />
        <View style={styles.paginationDotActive} />
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f4f2',
    padding: 20,
  },
  backIcon: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    color: '#000',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
    fontSize: 20,
    color: '#000',
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  nextButton: {
    backgroundColor: '#A47444',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#A47444',
    marginHorizontal: 5,
  },
});

export default Third2;