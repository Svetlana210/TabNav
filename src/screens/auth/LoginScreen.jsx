import React, {useState} from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import useAuth from '../../context/useAuth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setAuthUser, setIsAuth} = useAuth();

  const login = e => {
    if (email ?? password) {
      e.preventDefault();
      setIsAuth(true);
      setAuthUser({email, password});
    } else {
      Alert.alert('Fill in all inputs');
    }
  };

  return (
    <View style={styles.master}>
      <Text style={styles.header}>Sign In</Text>
      <Input placeholder="Email" onChangeText={setEmail} value={email} />
      <Input
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        title="Sign in"
        onPress={e => {
          login(e);
        }}
      />
      <View style={styles.link}>
        <Text style={styles.text}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.btn}>Register here.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    padding: 16,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    marginBottom: 18,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    marginTop: 16,
  },
  btn: {
    fontSize: 16,
    marginTop: 16,
    textDecorationLine: 'underline',
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default LoginScreen;
