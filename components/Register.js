import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import chefsHat from '../assets/chefs_hat.png';
import styles from './styles/register';
import {auth} from '../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const apiUrl =
    'https://e5e0-2600-4041-54c4-7200-f4e2-fd46-3c43-5b25.ngrok-free.app';

  const handleNavtoLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCreds => {
        const userEmail = userCreds.user.email;
        console.log('Registered successfully with:', userEmail);
        return fetch(`${apiUrl}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email: userEmail, firstName: name}),
        });
      })
      .then(response => response.json())
      .then(userData => {
        console.log('MongoDB User created:', userData);
      })
      .catch(error => console.log(error));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Image source={chefsHat} style={styles.smileLogo} />
        <Text style={styles.titleText}>Sign up for an account!</Text>
        <TextInput
          placeholder="First Name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email Address"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>
        Already have an account?{' '}
        <Text onPress={handleNavtoLogin} style={styles.registerHyperlink}>
          Log in here!
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

export default Register;
