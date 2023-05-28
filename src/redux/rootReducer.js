import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './auth/authSlice';
import noteReducer from './notes/notesSlice';

import {persistReducer} from 'redux-persist';

const rootReducer = combineReducers({
  auth: authReducer,
  notes: noteReducer,
  //   filter: filterReducer,
});

// import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// const persistedNotesReducer = persistReducer(persistConfig, noteReducer);

export default persistedReducer;
