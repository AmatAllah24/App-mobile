import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

const data = [
  { id: '1', title: 'Assiettes royale', image: require('./assets/assiette1.png'), quantity: 0 },
  { id: '2', title: 'Assiettes fines ', image: require('./assets/assiettefine.png'), quantity: 0 },
  { id: '3', title: 'Assiettes motifs', image: require('./assets/assiette3.png'), quantity: 0 },
  { id: '4', title: 'Assiettes Malaki ', image: require('./assets/assiette4.png'), quantity: 0 },
];

const Assiettes = ({ navigation }) => {
  const [items, setItems] = useState(data);
  const [cartCount, setCartCount] = useState(0);

  const updateQuantity = async (id, increment) => {
    const item = items.find(item => item.id === id);
    if (item) {
      const newQuantity = item.quantity + increment;
      if (newQuantity >= 0) {
        try {
          const response = increment > 0
            ? await axios.post('http://192.168.56.1:8080/cart/add', null, { params: { title: item.title } })
            : await axios.post('http://192.168.56.1:8080/cart/remove', null, { params: { title: item.title } });
          setItems(items.map(i => (i.id === id ? { ...i, quantity: response.data.quantity } : i)));
          fetchCartCount();
        } catch (error) {
          console.error('Error updating cart:', error);
        }
      }
    }
  };

  const fetchCartCount = async () => {
    try {
      const response = await axios.get('http://192.168.56.1:8080/cart/all');
      const totalCount = response.data.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(totalCount);
    } catch (error) {
      console.error('Error fetching cart count:', error);
    }
  };

  useEffect(() => {
    fetchCartCount();
  }, []);

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
      <Image source={require('./assets/rahal.jpeg')} style={styles.headerImage} />
      <View style={styles.cartContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Panier', { cartItems: items.filter(item => item.quantity > 0) })}>
          <Image source={require('./assets/panier.png')} style={styles.cartImage} />
          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
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

  totalText: {
    fontSize: 18,
    color: '#333',
  },

  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Assiettes;
