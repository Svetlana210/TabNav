import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {getUser} from '../../redux/auth/authSelectors';
// import useAuth from '../../context/useAuth';

const HomeScreen = ({navigation, route}) => {
  // const {userInfo} = useAuth();
  const {name} = useSelector(getUser);
  return (
    <View style={styles.master}>
      <Text style={styles.text}>Welcome to the app, {name}!</Text>
      <Text style={styles.smallText}>Here you can make notes</Text>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  master: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    marginHorizontal: 30,
  },
  text: {
    fontSize: 26,

    marginBottom: 20,
  },
  smallText: {fontSize: 17},
});
