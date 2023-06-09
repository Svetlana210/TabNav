/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signup} from '../../redux/auth/authOperations';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay/lib';
import {Input, Button} from 'react-native-elements';
// import useAuth from '../../context/useAuth';
import AntDesign from 'react-native-vector-icons/AntDesign';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const {register, isLoading} = useAuth();

  const dispatch = useDispatch();

  const signUp = e => {
    e.preventDefault();
    dispatch(signup({name, email, password}));
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
      {/* <Spinner visible={isLoading} /> */}
      <Text style={styles.header}>Sign Up</Text>
      <Input
        placeholder="Name"
        onChangeText={setName}
        value={name}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button
        title="Sign up"
        onPress={e => {
          signUp(e);
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
