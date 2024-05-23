// Login.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const navigation = useNavigation(); // Initialize useNavigation hook
  
    const handleLogin = () => {
      // Your login logic goes here
      // Navigate to the home page
      navigation.navigate('Homepage');
    };
  return (
    <ImageBackground
    source={{ uri: 'https://w0.peakpx.com/wallpaper/119/640/HD-wallpaper-gradient-1-kor4-rts-abstract-color-smooth.jpg' }}
    style={styles.bloacks}
    resizeMode="cover" // Ensure the image covers the entire background
  >
    <View style={styles.container}>
      
        <View style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
        </View>
      
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            // Add onChangeText and value props here to handle input changes
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            secureTextEntry={true}
            // Add onChangeText and value props here to handle input changes
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    bloacks: {
        flex: 1, // Ensure the background fills the entire screen
    },
    container: {
      padding: 30,
      paddingTop: 100,
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
      maxHeight: '100%',
    },
    header: {
      width: '100%',
      paddingVertical: 15,
      alignItems: 'center',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      // Other styles...
    },
    headerText: {
      color: '#000',
      fontSize: 26,
      textAlign: 'center',
    },
    form: {
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      padding: 20,
    },
    formControl: {
      marginBottom: 20,
    },
    label: {
      marginBottom: 5,
      fontSize: 16,
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 1,
      borderColor: '#f0f0f0',
      borderRadius: 5,
      padding: 12,
      fontSize: 16,
    },
    error: {
      color: '#df3434',
      fontSize: 14,
    },
    btn: {
      backgroundColor: '#8a2be2', // Gradient background
      borderRadius: 20,
      padding: 10,
      marginTop: 10,
    },
    btnText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
export default Login;
