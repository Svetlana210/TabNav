import {createSlice} from '@reduxjs/toolkit';
// const initialState = [];

export const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    add(state, action) {
      const newNote = {
        id: Math.random(),
        name: action.payload,
      };
      state.push(newNote);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});
export default notesSlice.reducer;
export const {add, remove} = notesSlice.actions;
