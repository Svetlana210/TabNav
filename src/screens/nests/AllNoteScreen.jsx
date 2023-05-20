import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import List from '../../components/List';

// import {NoteContext} from '../../context/noteContext';

const AllNoteScreen = ({navigation, route}) => {
  const notes = useSelector(state => state.noteReducer.noteList);

  // const {notes} = useContext(NoteContext);
  console.log('render AllNotesScreen');
  return (
    <View style={styles.master}>
      <View>
        <Text style={styles.text}>Your notes</Text>
      </View>
      <List list={notes} />
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate('Main', {
            screen: 'Profile',
            params: {length: notes.length},
          })
        }>
        <Text style={styles.btnText}>Go to My Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AllNoteScreen;

const styles = StyleSheet.create({
  master: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  text: {
    fontSize: 26,
    marginTop: 16,
    marginBottom: 5,
  },
  list: {
    fontSize: 17,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
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
