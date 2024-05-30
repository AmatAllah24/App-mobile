import React, { useState } from 'react';
import { View, TextInput, Alert, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Paiement = () => {
  const [total, setTotal] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleTotalChange = (value) => {
    setTotal(value);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f6f4f2',
      justifyContent: 'space-between',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    totalInput: {
      alignItems: 'center',
      backgroundColor: '#D2B48C',
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    input: {
      width: '100%',
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      fontSize: 16,
      backgroundColor: '#FFF',
    },
    paymentMethods: {
      marginBottom: 20,
    },
    paymentOption: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      marginBottom: 10,
      backgroundColor: '#F0E6E3',
    },
    selected: {
      backgroundColor: '#D0E6CF',
    },
    icon: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    deliveryInfo: {
      alignItems: 'center',
      marginBottom: 20,
    },
    progressBar: {
      width: '100%',
      backgroundColor: '#ddd',
      borderRadius: 5,
      overflow: 'hidden',
      height: 10,
      marginTop: 10,
    },
    progress: {
      height: '100%',
      backgroundColor: '#CD853F',
    },
    experienceRating: {
      alignItems: 'center',
    },
    stars: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
    },
    star: {
      width: 30,
      height: 30,
      marginHorizontal: 5,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Paiement</Text>
      <View style={styles.totalInput}>
        <Text style={styles.label}>Total :</Text>
        <TextInput
          value={total}
          onChangeText={handleTotalChange}
          placeholder="DHS"
          style={styles.input}
        />
      </View>
      <View style={styles.paymentMethods}>
        <Text style={styles.label}>Moyen de paiement</Text>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            paymentMethod === 'cash' && styles.selected,
          ]}
          onPress={() => handlePaymentMethodChange('cash')}
        >
          <Image style={styles.icon} source={require('./assets/cash.png')} />
          <Text>Par cash</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            paymentMethod === 'card' && styles.selected,
          ]}
          onPress={() => handlePaymentMethodChange('card')}
        >
          <Image style={styles.icon} source={require('./assets/carte.png')} />
          <Text>Par Carte</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.deliveryInfo}>
        <Text>Jours restants</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: '70%' }]}></View>
        </View>
      </View>
      <View style={styles.experienceRating}>
        <Text>Expérience avec l'appli</Text>
        <View style={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <Image key={index} style={styles.star} source={require('./assets/star.png')} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Paiement;
