import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Platform} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DatePicker component
import { Picker } from '@react-native-picker/picker';


const RegistrationForm = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    username: '',
    lastname: '',
    email: '',
    phone: '',
    birthdate: '',
    gender: '',
    password: '',
    cpassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    lastname: '',
    email: '',
    phone: '',
    birthdate: '',
    gender: '',
    password: '',
    cpassword: '',
  });

  const isEmailValid = (emailVal) => /\b[A-Za-z0-9._%+-]+@gmail\.com\b/.test(emailVal);

  const validateForm = () => {
    const errors = {};
    const { username, lastname, email, phone, birthdate, gender, password, cpassword } = formData;

    if (username === '') {
      errors.username = 'First name cannot be blank';
    } else if (!/^[a-zA-Z]+$/.test(username)) {
      errors.username = 'First name should contain only letters';
    }

    if (lastname === '') {
      errors.lastname = 'Last name cannot be blank';
    } else if (!/^[a-zA-Z]+$/.test(lastname)) {
      errors.lastname = 'Last name should contain only letters';
    }

    if (email === '') {
      errors.email = 'Email cannot be blank';
    } else if (!isEmailValid(email)) {
      errors.email = 'Email should be a valid Gmail address';
    }

    if (phone === '') {
      errors.phone = 'Phone number cannot be blank';
    } else if (!/^\d{11}$/.test(phone)) {
      errors.phone = 'Phone number should be exactly 11 digits';
    }

    if (birthdate === '') {
      errors.birthdate = 'Birthdate cannot be blank';
    }

    if (gender === '') {
      errors.gender = 'Please select a gender';
    }

    if (password === '') {
      errors.password = 'Password cannot be blank';
    } else if (password.length <= 7) {
      errors.password = 'Minimum of eight characters';
    }

    if (cpassword === '') {
      errors.cpassword = 'Confirm password cannot be blank';
    } else if (password !== cpassword) {
      errors.cpassword = 'Password not matched!';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert(
        'Hello ' + formData.username,
        'You are Registered',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Login'); // Navigate to the Login screen after successful registration
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

const handleChange = (name, value) => {
  if (name === 'gender') {
    setFormData((prevData) => ({ ...prevData, gender: value }));
  } else {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
};


  const [showDatePicker, setShowDatePicker] = useState(false);
const [selectedDate, setSelectedDate] = useState(new Date());

const showDatePickerModal = () => {
  setShowDatePicker(true);
};

const hideDatePickerModal = () => {
  setShowDatePicker(false);
};

const handleDateChange = (event, selectedDate) => {
  hideDatePickerModal();
  if (selectedDate) {
    setSelectedDate(selectedDate);
    const formattedDate = selectedDate.toLocaleDateString();
    setFormData((prevData) => ({ ...prevData, birthdate: formattedDate }));
  }
};



  return (
    <ImageBackground
    source={{ uri: 'https://w0.peakpx.com/wallpaper/119/640/HD-wallpaper-gradient-1-kor4-rts-abstract-color-smooth.jpg' }}
    style={styles.background}
  >
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      
        <View style={styles.header}>
          <Text style={styles.headerText}>Registration Form</Text>
          
        </View>
       
      
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            value={formData.username}
            onChangeText={(text) => handleChange('username', text)}
            placeholder="Enter Your First Name"
          />
          {formErrors.username && <Text style={styles.error}>{formErrors.username}</Text>}
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={formData.lastname}
            onChangeText={(text) => handleChange('lastname', text)}
            placeholder="Enter Your Last Name"
          />
          {formErrors.lastname && <Text style={styles.error}>{formErrors.lastname}</Text>}
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
            placeholder="Enter Your Email"
          />
          {formErrors.email && <Text style={styles.error}>{formErrors.email}</Text>}
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={formData.phone}
            onChangeText={(text) => handleChange('phone', text)}
            placeholder="Enter Your Phone Number"
          />
          {formErrors.phone && <Text style={styles.error}>{formErrors.phone}</Text>}
        </View>
        <View style={styles.formControl}>
  <Text style={styles.label}>Birthdate</Text>
  <TouchableOpacity onPress={showDatePickerModal}>
    <TextInput
      style={styles.input}
      value={formData.birthdate}
      placeholder="Select Your Birthdate"
      editable={false} // Make the input field non-editable
    />
  </TouchableOpacity>
  {formErrors.birthdate && <Text style={styles.error}>{formErrors.birthdate}</Text>}
  {showDatePicker && (
    <DateTimePicker
      value={selectedDate}
      mode="date"
      display="default"
      onChange={handleDateChange}
    />
  )}
</View>

<View style={styles.formControl}>
  <Text style={styles.label}>Gender</Text>
  <Picker
    selectedValue={formData.gender}
    onValueChange={(itemValue, itemIndex) => setFormData((prevData) => ({ ...prevData, gender: itemValue }))}
    style={[styles.input, { paddingVertical: Platform.OS === 'android' ? 20 : 12 }]} 
  >
    <Picker.Item label="Select Gender" value="" />
    <Picker.Item label="Male" value="Male" />
    <Picker.Item label="Female" value="Female" />
    <Picker.Item label="Other" value="Other" />
  </Picker>
  {formErrors.gender && <Text style={styles.error}>{formErrors.gender}</Text>}
</View>





        <View style={styles.formControl}>
  <Text style={styles.label}>Password</Text>
  <TextInput
    style={styles.input}
    value={formData.password}
    onChangeText={(text) => handleChange('password', text)}
    placeholder="Enter Your Password"
    secureTextEntry={true} // Add this line
  />
  {formErrors.password && <Text style={styles.error}>{formErrors.password}</Text>}
</View>
<View style={styles.formControl}>
  <Text style={styles.label}>Confirm Password</Text>
  <TextInput
    style={styles.input}
    value={formData.cpassword}
    onChangeText={(text) => handleChange('cpassword', text)}
    placeholder="Confirm Your Password"
    secureTextEntry={true} // Add this line
  />
  {formErrors.cpassword && <Text style={styles.error}>{formErrors.cpassword}</Text>}
</View>

       
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
      
 
       {/* Navigation link to Login screen */}
     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Already have an account? Login</Text>
          </TouchableOpacity>

      </View>
    
    </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
 
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

export default RegistrationForm;