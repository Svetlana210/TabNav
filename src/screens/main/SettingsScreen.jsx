import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import useAuth from '../../context/useAuth';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SettingsScreen = ({navigation}) => {
  const {setIsAuth} = useAuth();

  const logout = () => {
    setIsAuth(false);
  };

  React.useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
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
      <TouchableOpacity style={styles.btn} onPress={() => logout()}>
        <Text style={styles.btnText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SettingsScreen;

const styles = StyleSheet.create({
  master: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  setting: {
    marginRight: 10,
  },
});
