import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.backgroundImage}></View>
      <View style={styles.content}>
        <Text style={styles.heading}>Welcome to Eras tour</Text>
        <Text style={styles.paragraph}>Explore Taylor Swift, learn about us, and more.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.button}>
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Services')} style={styles.button}>
          <Text style={styles.buttonText}>Our Services</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentBelow}>
        <Text style={styles.heading}>Additional Content Below</Text>
        <Text>This is some additional content below the main section.</Text>
      </View>
    </View>
  );
};

const Services = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Our Services</Text>
      </View>
      <View style={styles.content}>
        <Text>Explore our wide range of services tailored to meet your needs.</Text>
        <Text>Contact us today to learn more!</Text>
      </View>
    </View>
  );
};

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>About Us</Text>
      </View>
      <View style={styles.content}>
        <Text>Learn about Taylor Swift Corporation.</Text>
        <Text>Find out what sets us apart from other artists.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    zIndex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 36,
    marginBottom: 20,
    color: 'white',
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 30,
    color: 'white',
  },
  button: {
    backgroundColor: '#DC2424',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
  },
  contentBelow: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  container: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.19)',
    borderRadius: 16,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    backgroundColor: '#DC2424',
    paddingVertical: 30,
    marginBottom: 20,
    borderRadius: 10,
  },
});

export { Home, Services, About };
