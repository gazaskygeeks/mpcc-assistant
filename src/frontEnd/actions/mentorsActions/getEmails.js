import axios from 'axios';

import {
  GET_EMAILS_IN_PROGRESS,
  GET_EMAILS_SUCCESS,
  GET_EMAILS_FAILURE
} from '../../constants/actionTypes.js';

export const getEmailsInProgress = () => ({
  type: GET_EMAILS_IN_PROGRESS
});
export const getEmailsSuccess = email => ({
  type: GET_EMAILS_SUCCESS,
  payload: email.data
});
export const getEmailsFailure = error => ({
  type: GET_EMAILS_FAILURE,
  payload: error
});

export const getEmails = () => dispatch => {
  dispatch(getEmailsInProgress());
  axios
    .get('/dashboard/mentor-panel/get-emails')
    .then(response => {
      if (response.status!==200) {
        throw new Error('Internal Server Error');
      }

      return dispatch(getEmailsSuccess(response.data));
    })
    .catch(err => {
      return dispatch(getEmailsFailure(err.message));
    });
};
