import {REGISTER, LOGIN, LOG_OUT, LOGGED_IN} from '../actions/type';

const initialState = {
  userInfo: {
    name: '',
    email: '',
    password: '',
  },
  isLoading: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {userInfo: action.userInfo};
    case LOGIN:
      return {userInfo: action.userInfo};
    case LOG_OUT:
      return {
        ...state,
        noteList: state.noteList.filter(note => note.id !== action.id),
      };
    case LOGGED_IN:
      return {
        ...state,
        noteList: state.noteList.filter(note => note.id !== action.id),
      };
    default:
      return state;
  }
};
export default authReducer;
