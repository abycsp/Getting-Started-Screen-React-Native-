import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import ConnectWithDream from './ConnectWithDream';
import ConnectWithImage from './ConnectWithImage';
import ThirdText from './ThirdText';

const Button = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: 'https://w0.peakpx.com/wallpaper/588/100/HD-wallpaper-darling-anime-colorful-cool-darling-in-the-franxx-dope-franxx-girl-logo-tours.jpg'}} style={styles.backgroundImage}>
        <View style={styles.gettingStartedScreen}>
          <ConnectWithDream />
          <ConnectWithImage />
          <ThirdText />
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.btnText}>Get started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
  },
  gettingStartedScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  connectWithDream: {
    color: '#000',
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 90,
    backgroundColor: '#ba55d3',
    borderRadius: 30,
    marginTop: 20,
  },
  btnText: {
    color: '#000',
  },
  thirdText: {
    textAlign: 'center',
    color: '#000',
  },
});

export default Button;
