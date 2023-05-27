import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AddNote from '../../components/AddNote';
// import {NoteContext} from '../../context/noteContext';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../../redux/notes/notesSlice';

const AddNoteScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);
  // const {notes, setNotes} = useContext(NoteContext);
  const handleSubmit = text => {
    dispatch(add(text));
  };

  return (
    <View style={styles.master}>
      <View>
        <Text style={styles.text}>Here you can add notes</Text>
        <AddNote navigation={navigation} onSubmit={handleSubmit} />
      </View>
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
export default AddNoteScreen;

const styles = StyleSheet.create({
  master: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 10,
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
  input: {
    marginVertical: 20,
    width: '100%',
    borderBottomWidth: 2,
    fontSize: 16,
    padding: 16,
  },
});
