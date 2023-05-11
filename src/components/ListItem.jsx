import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListItem = ({item}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
};

export default React.memo(ListItem);

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 2,
    padding: 15,
    borderColor: '#1486ff',
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 10,
    width: 280,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
  },
});
