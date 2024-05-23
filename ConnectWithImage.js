import React from 'react';
import { View, Image } from 'react-native';

const ConnectWithImage = () => {
  return (
    <View style={styles.connectWithImage}>
      <Image
        source={{uri: 'https://w0.peakpx.com/wallpaper/588/100/HD-wallpaper-darling-anime-colorful-cool-darling-in-the-franxx-dope-franxx-girl-logo-tours.jpg'}}
        style={styles.imageStyle}
      />
    </View>
  );
};

const styles = {
  connectWithImage: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageStyle: {
    width: 375, // Adjust width and height if needed
    height: 375,
  },
};

export default ConnectWithImage;
