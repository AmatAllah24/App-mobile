import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const FirstPage = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Second');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.subtitle}>Créez Votre Cérémonie</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f4f2',
  },
  imageContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 200,
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
  },
});

export default FirstPage;
