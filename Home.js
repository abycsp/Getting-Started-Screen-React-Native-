// Home.js in React Native
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://pyxis.nymag.com/v1/imgs/75c/4e0/83371cfdf5dd1fa6fdcc68b5ca3af22ed5-taylor-swift-lede.rhorizontal.w700.jpg' }}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.headerText}>Welcome to Eras tour</Text>
          <Text>Explore Taylor Swift, learn about us, and more.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.btn}>
            <Text style={styles.btnText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Services')} style={styles.btn}>
            <Text style={styles.btnText}>Our Services</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.contentBelow}>
        <Text style={styles.headerText}>Additional Content Below</Text>
        <Text>This is some additional content below the main section.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    opacity: 0.5, // Adjust the opacity as needed
  },
  content: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 10,
    color: 'white',
  },
  btn: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#DC2424',
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contentBelow: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
});

export default Home;
