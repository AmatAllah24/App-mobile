import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ThirdPage = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.container}>
        <Text style={styles.title}>Choisir votre option</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Fourth')}>
            <Image source={require('./assets/client.png')} style={styles.optionImage} />
            <Text>Client</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Image source={require('./assets/fournisseur.png')} style={styles.optionImage} />
            <Text>Fournisseur</Text>
          </TouchableOpacity>
        </View>
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
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 120,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  option: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  optionImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default ThirdPage;
