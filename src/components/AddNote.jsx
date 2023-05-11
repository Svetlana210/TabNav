import {StyleSheet, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const AddNote = ({navigation, onSubmit}) => {
  const [text, setText] = useState('');

  const handleChange = val => {
    setText(val);
  };

  const handleClick = () => {
    onSubmit(text);
    setText('');
    navigation.navigate('All');
  };
  console.log('render AddNote');
  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={handleChange}
          value={text}
        />
      </View>
      <Button title="Add" onPress={handleClick} />
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
    width: '100%',
    borderBottomWidth: 2,
    fontSize: 16,
    padding: 16,
  },
});
