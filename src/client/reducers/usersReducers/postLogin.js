import {
  POST_LOGIN_IN_PROGRESS,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_BAD,
  POST_LOGIN_FAILURE,
  HANDLE_INPUT_CHANGE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  loginResult: {},
  password: '',
  username: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_LOGIN_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        loginResult: payload
      };
    case POST_LOGIN_BAD:
      return {
        ...state,
        isFetching: false,
        loginResult: payload
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    case HANDLE_INPUT_CHANGE: {
      return {
        ...state,
        [payload.name]: payload.value
      };
    }
    default:
      return state;
  }
};
