import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

const Third1 = ({ navigation }) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [brandName, setBrandName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        // Optionally, navigate to another screen or update the UI
        navigation.navigate('Third2');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>⬅️</Text>
      </TouchableOpacity>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>MAGNIFIQUE</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputIcon}>👤</Text>
        <TextInput
          placeholder="Nom"
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputIcon}>👤</Text>
        <TextInput
          placeholder="Prénom"
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputIcon}>✉️</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputIcon}>🏢</Text>
        <TextInput
          placeholder="Nom de la marque"
          style={styles.input}
          value={brandName}
          onChangeText={setBrandName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputIcon}>🔒</Text>
        <TextInput
          placeholder="Mot de passe"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleSignUp}>
        <Text style={styles.nextButtonText}>Suivant</Text>
      </TouchableOpacity>
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDotActive} />
        <View style={styles.paginationDot} />
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

export default Third1;