import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {deleteNote} from '../redux/notes/actions/note';

const ListItem = ({item, id}) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteNote(id));
  };
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{item}</Text>
      <TouchableOpacity onPress={onDelete} style={styles.icon}>
        <FontAwesome name="trash-o" size={30} color={'darkred'} />
      </TouchableOpacity>
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
  icon: {
    position: 'absolute',
    top: '40%',
    right: '5%',
  },
});
