import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PhotoScreen = ({navigation}) => {
  return (
    <View style={styles.master}>
      <Text>The list of photos</Text>
    </View>
  );
};
export default PhotoScreen;

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
