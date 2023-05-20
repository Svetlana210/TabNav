import {LOGIN, REGISTER, LOG_OUT, LOGGED_IN} from './types';
import axios from 'axios';

export const register = userInfo => ({
  type: REGISTER,
  payload: userInfo,
});

export const login = userInfo => ({
  type: LOGIN,
  payload: userInfo,
});

export const logOut = note => ({
  type: LOG_OUT,
  data: note,
});

export const loggedIn = note => ({
  type: LOGGED_IN,
  data: note,
});
