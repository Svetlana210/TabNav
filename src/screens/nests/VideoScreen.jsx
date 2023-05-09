import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const VideoScreen = ({navigation}) => {
  return (
    <View style={styles.master}>
      <Text>The list of videos</Text>
    </View>
  );
};
export default VideoScreen;

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
