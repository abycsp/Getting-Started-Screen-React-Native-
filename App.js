import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from './Button';
import RegistrationForm from './RegistrationForm';
import Login from './Login';
import Homepage from './Homepage'; // Import Homepage component
import { View, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <ImageBackground source={{ uri: 'https://w0.peakpx.com/wallpaper/588/100/HD-wallpaper-darling-anime-colorful-cool-darling-in-the-franxx-dope-franxx-girl-logo-tours.jpg' }} style={styles.background}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button navigation={navigation} />
    </View>
  </ImageBackground>
);

const RegistrationStack = createNativeStackNavigator();

const RegistrationStackScreen = () => (
  <RegistrationStack.Navigator>
    <RegistrationStack.Screen name="RegistrationForm" component={RegistrationForm} options={{ headerShown: false }} />
  </RegistrationStack.Navigator>
);

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <MainStack.Screen name="Registration" component={RegistrationStackScreen} options={{ headerShown: false }} />
        <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        {/* Add the Homepage screen to the navigation stack */}
        <MainStack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
