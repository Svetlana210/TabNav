import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import useAuth from '../../context/useAuth';

const ProfileScreen = ({navigation}) => {
  const {authUser} = useAuth();
  return (
    <View style={styles.master}>
      <Text style={styles.text}>It is a profile of {authUser.email}!</Text>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Photos')}>
          <Text style={styles.btnText}>Go to photos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Music')}>
          <Text style={styles.btnText}>Go to music</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Video')}>
          <Text style={styles.btnText}>Go to video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  master: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 50,
  },
  text: {
    fontSize: 26,
    marginTop: 16,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 40,
    height: 50,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#1486ff',
  },
  btnText: {
    fontSize: 20,
  },
});
