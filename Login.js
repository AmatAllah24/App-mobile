import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
        // Navigate to the PhotoPreview screen if login is successful
        navigation.navigate('Third3'); // Replace 'PhotoPreview' with the correct screen name
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          console.log('User not found, redirecting to sign up');
          // Navigate to the sign-up screen if the user is not found
          navigation.navigate('SignUp');
        } else if (error.code === 'auth/wrong-password') {
          console.log('Wrong password');
        } else {
          console.error(error);
        }
      });
  };

  return (
    <View style={styles.background}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Third1')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f6f4f2',
  },
  container: {
    alignItems: 'center',
    width: '80%',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 50,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signUpText: {
    color: 'blue',
    textAlign: 'center',
  },
});

export default Login;