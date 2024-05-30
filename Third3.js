import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const Third3 = ({ navigation }) => {
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const handlePhotoImport = async () => {
    launchImageLibrary({ mediaType: 'photo' }, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        await uploadImageToFirebase(source);
      }
    });
  };

  const uploadImageToFirebase = async (image) => {
    const { uri } = image;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = uri.replace('file://', '');
    setUploading(true);
    setTransferred(0);

    const task = storage().ref(filename).putFile(uploadUri);

    task.on('state_changed', (snapshot) => {
      setTransferred(
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
    });

    try {
      await task;
      const url = await storage().ref(filename).getDownloadURL();
      navigation.navigate('PhotoPreview', { photo: { uri: url, name: filename } });
      Alert.alert('Image uploaded!', 'Your image has been uploaded to Firebase Cloud Storage!');
    } catch (e) {
      console.error(e);
      Alert.alert('Upload failed', 'Something went wrong while uploading the image.');
    }

    setUploading(false);
    setTransferred(0);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <Text style={styles.subtitle}>Créez Votre Cérémonie</Text>
      <TouchableOpacity style={styles.photoButton} onPress={handlePhotoImport}>
        <Text style={styles.photoButtonText}>Importer une photo depuis la galerie</Text>
      </TouchableOpacity>
      {uploading && (
        <View style={styles.progressBarContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>{transferred}% Completed</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f4f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
  },
  photoButton: {
    borderColor: '#A47444',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  photoButtonText: {
    color: '#A47444',
    fontSize: 18,
  },
  progressBarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Third3;