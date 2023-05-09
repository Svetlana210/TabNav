/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import useAuth from '../../context/useAuth';
import AntDesign from 'react-native-vector-icons/AntDesign';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {setAuthUser, setIsAuth} = useAuth();

  const signup = e => {
    if (email && password) {
      e.preventDefault();
      setIsAuth(true);
      setAuthUser({email, password});
    } else {
      Alert.alert('Fill in all inputs');
    }
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.setting}
          onPress={() => navigation.navigate('Help')}>
          <AntDesign name="setting" size={30} color={'#1486ff'} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.master}>
      <Text style={styles.header}>Sign Up</Text>
      <Input placeholder="Email" onChangeText={setEmail} value={email} />
      <Input
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        title="Sign up"
        onPress={e => {
          signup(e);
        }}
      />
      <View style={styles.link}>
        <Text style={styles.text}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.btn}>Login in here.</Text>
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

export default RegisterScreen;
