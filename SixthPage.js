import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import axios from 'axios';

// Assurez-vous que les chemins vers les images locales sont corrects
const images = {
    'rahal.jpeg': require('./assets/rahal.jpeg'),
    'himmi.jpeg': require('./assets/himmi.jpeg'),
    'reve.jpeg': require('./assets/reve.jpeg'),  // Utilisez le bon nom de fichier
};

const SixthPage = ({ navigation }) => {
    const [caterers, setCaterers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchCaterers();
    }, []);

    const fetchCaterers = async () => {
        try {
            const response = await axios.get('http://192.168.56.1:8080/traiteurs/all');
            console.log('Fetched caterers:', response.data);
            setCaterers(response.data);
        } catch (error) {
            console.error('Error fetching caterers:', error);
            Alert.alert('Error', 'Failed to fetch caterers');
        }
    };

    const renderItem = ({ item }) => {
        let onPressHandler;

        if (item.name === "Reve d'une nuit traiteur") {
            onPressHandler = () => navigation.navigate('Reve');
        } else if (item.name === 'Rahalmaître traiteur') {
            onPressHandler = () => navigation.navigate('Seventh', { catererId: item.id });
        } else {
            onPressHandler = () => navigation.navigate('Himmi1');
        }

        const imageSource = images[item.imagePath.trim()];
        if (!imageSource) {
            console.warn(`Image not found for ${item.imagePath}`);
            // Log the image paths and item details for debugging
            console.log('Available image paths:', Object.keys(images));
            console.log('Current item:', item);
        }

        return (
            <TouchableOpacity style={styles.catererItem} onPress={onPressHandler}>
                <Image source={imageSource} style={styles.catererImage} />
                <View style={styles.catererInfo}>
                    <Text style={styles.catererName}>{item.name}</Text>
                    <Text style={styles.catererLocation}>{item.location}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>

            <FlatList
                data={caterers}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f4f2',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    searchInput: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 20,
    },

    catererImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    catererInfo: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 5,
        padding: 5,
    },
    catererName: {
        color: '#fff',
        fontSize: 18,
    },
    catererLocation: {
        color: '#fff',
        fontSize: 14,
    },
});

export default SixthPage;
