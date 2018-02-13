import axios from 'axios';

import {
  POST_LOGIN_IN_PROGRESS,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_BAD,
  POST_LOGIN_FAILURE
} from '../../constants/actionTypes.js';

export const postLoginInProgress = () => ({
  type: POST_LOGIN_IN_PROGRESS
});
export const postLoginSuccess = loginResult => ({
  type: POST_LOGIN_SUCCESS,
  payload: loginResult
});
export const postLoginBad = loginResult => ({
  type: POST_LOGIN_BAD,
  payload: loginResult
});
export const postLoginFailure = err => ({
  type: POST_LOGIN_FAILURE,
  payload: err
});

export const postLogin = (username, password) => dispatch => {
  dispatch(postLoginInProgress());
  axios.post('/login', {
    username,
    password
  })
    .then(response => {
      const loginResult = response.data;
      if (loginResult.loggedin === false) {
        return dispatch(postLoginBad(loginResult));
      }
      dispatch(postLoginSuccess(loginResult));
    })
    .catch(err => {
      dispatch(postLoginFailure(err));
    });
};
