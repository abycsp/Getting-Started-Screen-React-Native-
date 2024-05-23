import { createStackNavigator } from '@react-navigation/stack';
import RegistrationForm from './RegistrationForm'; // Import your RegistrationForm component

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Button} />
      <Stack.Screen name="RegistrationForm" component={RegistrationForm} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
