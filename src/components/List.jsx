import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import ListItem from './ListItem';

const List = ({list}) => {
  const renderItem = itemData => {
    return <ListItem item={itemData.item.name} id={itemData.item.id} />;
  };
  return (
    <View style={styles.container}>
      <FlatList data={list} renderItem={renderItem} />
    </View>
  );
};

export default React.memo(List);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
