// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import noteReducer from './notes/reducers/noteReducer';
// import authReducer from './auth/reducers/authReducer';
// const rootReducer = combineReducers({
//   noteReducer: noteReducer,
//   authReducer: authReducer,
// });
// const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));
// export default configureStore;

import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';

import rootReducer from '../redux/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
