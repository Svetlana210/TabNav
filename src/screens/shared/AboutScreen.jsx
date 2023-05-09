import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.master}>
      <Text style={styles.text}>About app</Text>
    </View>
  );
};
export default AboutScreen;

const styles = StyleSheet.create({
  master: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 26,
    marginTop: 20,
  },
});
