import {createSlice} from '@reduxjs/toolkit';
import {fetchAllNotes, fetchAddNotes, fetchDeleteNote} from './notesOperations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'notes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllNotes.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAllNotes.fulfilled, (store, {payload}) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchAllNotes.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchAddNotes.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAddNotes.fulfilled, (store, {payload}) => {
        store.fetchAddNotes = false;
        store.items.push(payload);
      })
      .addCase(fetchAddNotes.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteNote.pending, store => {
        store.loading = true;
      })
      .addCase(fetchDeleteNote.fulfilled, (store, {payload}) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteNote.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;
      });
  },
});
export default contactSlice.reducer;
