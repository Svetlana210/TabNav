import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './auth/authSlice';
import noteReducer from '../redux/notes/notesSlice';
// import contactsReducer from './contacts/contacts-slice';
import {persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
// const persistedNotesReducer = persistReducer(persistConfig, noteReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  notes: noteReducer,
  //   filter: filterReducer,
});

export default rootReducer;
