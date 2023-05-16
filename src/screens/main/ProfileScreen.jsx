import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import useAuth from '../../context/useAuth';

const ProfileScreen = ({navigation, route}) => {
  const {userInfo} = useAuth();
  console.log('render Profile');
  return (
    <View style={styles.master}>
      <Text style={styles.text}>It is a profile of {userInfo.user.name}!</Text>
      <Text style={styles.text}>You have {route.params?.length} notes</Text>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate('Drawer', {
              screen: 'Add',
            })
          }>
          <Text style={styles.btnText}>Add notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate('Drawer', {
              screen: 'All',
            })
          }>
          <Text style={styles.btnText}>Go to All Notes</Text>
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
