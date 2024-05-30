// FifthPage.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const FifthPage = () => {
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10);

  const handleConfirmPress = () => {

    navigation.navigate('Sixth');
  };

  const isConfirmDisabled = () => {
    return !selectedDate || !numPeople.trim() || new Date(selectedDate) < minDate;
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Je saisis la date de mon événement</Text>

      <Calendar
        style={styles.calendar}
        minDate={minDate.toISOString().split('T')[0]}
        onDayPress={(day) => {
          console.log('selected day', day.dateString);
          setSelectedDate(day.dateString);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Saisissez le nombre de personnes"
        keyboardType="numeric"
        onChangeText={(text) => setNumPeople(text)}
        value={numPeople}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isConfirmDisabled() ? '#ccc' : '#d4a373' }]}
        onPress={handleConfirmPress}
        disabled={isConfirmDisabled()}
      >
        <Text style={styles.buttonText}>Confirmer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f4f2',
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 30,
    width: '90%',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FifthPage;
