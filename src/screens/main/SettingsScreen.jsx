import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import useAuth from '../../context/useAuth';

const SettingsScreen = ({navigation}) => {
  const {setIsAuth} = useAuth();

  const logout = () => {
    setIsAuth(false);
  };

  React.useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <Button onPress={() => navigation.navigate('Help')} title="Help" />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.master}>
      <Button title="Log out" onPress={() => logout()} />
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
    marginBottom: 10,
  },
});
