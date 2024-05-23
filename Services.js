// Services.js in React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Services = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Our Services</Text>
      </View>
      <View style={styles.content}>
        <Text>Explore our wide range of services tailored to meet your needs.</Text>
        <Text>Contact us today to learn more!</Text>
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
  header: {
    backgroundColor: '#DC2424',
    paddingVertical: 30,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    color: '#000000',
    fontSize: 26,
    textTransform: 'uppercase',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
});

export default Services;
