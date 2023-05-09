import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HelpScreen = ({navigation}) => {
  return (
    <View style={styles.master}>
      <Text style={styles.text}>How to use this app</Text>
    </View>
  );
};
export default HelpScreen;

const styles = StyleSheet.create({
  master: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  text: {
    fontSize: 26,
    marginTop: 10,
  },
});
