import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './auth/authSlice';
import noteReducer from './notes/reducers/noteReducer';
// import contactsReducer from './contacts/contacts-slice';
import {persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  notes: noteReducer,
  //   filter: filterReducer,
});

export default rootReducer;
