import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PhotoPreview = ({ route, navigation }) => {
  const { photo } = route.params;
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');

  const handlePriceChange = (text) => {
    setPrice(text);
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleAddToStore = () => {
    navigation.navigate('Store', { product: { uri: photo.uri, name, price } });
  };

  return (
    <View style={styles.container}>
      {photo && photo.uri && <Image source={{ uri: photo.uri }} style={styles.image} />}
      <TextInput
        style={styles.input}
        placeholder="Nom du produit"
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Prix du produit"
        value={price}
        onChangeText={handlePriceChange}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddToStore}>
        <Text style={styles.buttonText}>Ajouter à mon store</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A47444',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#A47444',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default PhotoPreview;