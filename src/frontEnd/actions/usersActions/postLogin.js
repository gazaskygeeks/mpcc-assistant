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
export const postLoginSuccess = status => ({
  type: POST_LOGIN_SUCCESS,
  payload: status
});
export const postLoginBad = status => ({
  type: POST_LOGIN_BAD,
  payload: status
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
      console.log(response);
    })
    .catch(err => {
      console.log(err);
      dispatch(postLoginFailure(err));
    });
};
