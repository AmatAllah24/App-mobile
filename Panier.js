import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const Panier = ({ route, navigation}) => {
  const [cartItems, setCartItems] = useState(route.params?.cartItems ?? []);


  const updateQuantity = (id, increment) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + increment;
          return {
            ...item,
            quantity: newQuantity > 0 ? newQuantity : 0,
          };
        }
        return item;
      });
    });
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemTitle}>{item.title}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.cartItemQuantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Panier</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.cartList}
      />
      <TouchableOpacity style={styles.paymentButton} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.paymentButtonText}>Procéder au paiement</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f4f2',
    padding: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
    color: '#CD853F',
  },
  cartItemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 16,
    color: '#333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    fontSize: 20,
    color: '#333',
    paddingHorizontal: 10,
  },
  cartItemQuantity: {
    fontSize: 16,
    color: '#333',
    marginHorizontal: 10,
  },
  cartList: {
    paddingBottom: 10,
  },
  paymentButton: {
    backgroundColor: '#A87744',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Panier;
