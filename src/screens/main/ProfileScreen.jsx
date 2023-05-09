import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import useAuth from '../../context/useAuth';

const ProfileScreen = ({navigation}) => {
  const {authUser} = useAuth();
  return (
    <View style={styles.master}>
      <Text style={styles.text}>It is a profile of {authUser.email}!</Text>
      <View>
        <Button
          title="Go to photos"
          onPress={() => navigation.navigate('Photos')}
        />
        <Button
          title="Go to music"
          onPress={() => navigation.navigate('Music')}
        />
        <Button
          title="Go to video"
          onPress={() => navigation.navigate('Video')}
        />
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
});
