import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Store = ({ route, navigation }) => {
  const { product } = route.params;
  const [orderCount, setOrderCount] = useState(0);

  const handleAddToCart = () => {
    setOrderCount(orderCount + 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/reve.jpeg')} style={styles.headerImage} />
        <View style={styles.cartContainer}>
          <Image source={require('./assets/panier.png')} style={styles.cartImage} />
          <Text style={styles.cartCount}>{orderCount}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Mon produit</Text>
      <Image source={{ uri: product.uri }} style={styles.productImage} />

      <Text style={styles.sectionTitle}>Détails du produit</Text>
      <Text style={styles.name}>Nom: {product.name}</Text>
      <Text style={styles.price}>Prix: {product.price} €</Text>
      <Text style={styles.description}>
        Description: Ceci est une description du produit. Il peut inclure des détails sur les caractéristiques, les avantages et d'autres informations pertinentes.
      </Text>


      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Third3')}>
        <Text style={styles.addButtonText}>Ajouter un produit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f6f4f2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
  },
  headerImage: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  cartImage: {
    width: 30,
    height: 30,
  },
  cartCount: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 5,
  },
  productImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: '#FF6347',
    textAlign: 'left',
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  cartButton: {
    backgroundColor: '#FFA500',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Store;