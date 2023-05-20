import {ADD_NOTE, DELETE_NOTE} from '../actions/types';

const initialState = {
  noteList: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        noteList: state.noteList.concat({id: Math.random(), name: action.data}),
      };
    case DELETE_NOTE:
      return {
        ...state,
        noteList: state.noteList.filter(note => note.id !== action.id),
      };
    default:
      return state;
  }
};
export default noteReducer;
