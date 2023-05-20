import {ADD_NOTE, DELETE_NOTE} from './types';

export const addNote = note => ({
  type: ADD_NOTE,
  data: note,
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id: id,
});
