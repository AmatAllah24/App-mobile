import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const data = [
  { id: '1', title: 'Jus Exotique', image: require('./assets/jusr1.png'), quantity: 0 },
  { id: '2', title: 'Gateau préstige', image: require('./assets/jusr2.png'), quantity: 0 },
  { id: '3', title: 'Gateau traditionel', image: require('./assets/jusr3.png'), quantity: 0 },
  { id: '4', title: 'Macarron ', image: require('./assets/jusr4.png'), quantity: 0 },
];

const EntreeR = ({ navigation }) => {
  const [items, setItems] = useState(data);
  const [cartCount, setCartCount] = useState(0);

  const updateQuantity = (id, increment) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + increment;
        if (newQuantity >= 0) {
          setCartCount(cartCount + increment);
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 0}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
        <View style={styles.container}>
          <Image source={require('./assets/reve.jpeg')} style={styles.headerImage} />
          <TouchableOpacity onPress={() => navigation.navigate('Panier', { cartItems: items.filter(item => item.quantity > 0) })}>
            <View style={styles.cartContainer}>
              <Image source={require('./assets/panier.png')} style={styles.cartImage} />
              {cartCount > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{cartCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.list}
          />
        </View>
      );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f4f2',
    paddingTop: 10,
  },
  headerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 12,
    marginTop: 10,
  },
  cartImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  cartBadge: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 2,
    paddingHorizontal: 5,
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
  },
  list: {
    paddingHorizontal: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemDetails: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    color: '#333',
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
    color: '#333',
    marginHorizontal: 10,
  },
});

export default EntreeR;
