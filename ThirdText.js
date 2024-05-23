import React from 'react';
import { Text } from 'react-native';

const ThirdText = () => {
  return (
    <Text style={styles.thirdText}>
      
      Zero Two is a central character in the anime series   {"\n"}
      "Darling in the Franxx."
    </Text>
  );
};

const styles = {
  thirdText: {
    textAlign: 'center',
    color: '#fff',
  },
};

export default ThirdText;
