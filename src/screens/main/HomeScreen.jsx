import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useAuth from '../../context/useAuth';

const HomeScreen = ({navigation}) => {
  const {authUser} = useAuth();
  return (
    <View style={styles.master}>
      <Text style={styles.text}>Welcome to the app, {authUser.email}!</Text>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  master: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  text: {
    fontSize: 26,
    marginTop: 16,
  },
});
