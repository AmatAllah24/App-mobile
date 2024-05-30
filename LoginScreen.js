import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '160619948470-vmi4fqngdqie2ii867giu9fm7j7vh1f7.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
      console.log(idToken);
      Alert.alert("Success Login");
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate('Paiement');
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "A non-recoverable sign in failure occurred");
    }
  }

  const loginWithEmailAndPass = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        Alert.alert('Success: Logged In');
        navigation.navigate('Paiement');
      })
      .catch(err => {
        console.log(err);
        Alert.alert("Error", err.nativeErrorMessage || "An error occurred");
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={loginWithEmailAndPass} style={styles.button}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.link}>Vous n'avez pas de compte? Inscrivez-vous</Text>
      </TouchableOpacity>
      <Button title="Login with Google" onPress={onGoogleButtonPress} color="#A87744" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f6f4f2',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#A87744',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    color: '#A87744',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;
