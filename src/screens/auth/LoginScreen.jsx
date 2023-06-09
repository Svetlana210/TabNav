import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/auth/authOperations';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay/lib';
import {Input, Button} from 'react-native-elements';
// import useAuth from '../../context/useAuth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const {isLoading} = useAuth();

  const dispatch = useDispatch();

  const signIn = e => {
    e.preventDefault();
    dispatch(login({email, password}));
  };

  return (
    <View style={styles.master}>
      {/* <Spinner visible={isLoading} /> */}
      <Text style={styles.header}>Sign In</Text>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
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
        title="Sign in"
        onPress={e => {
          signIn(e);
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
