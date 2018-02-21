import axios from 'axios';

import {
  POST_EMAIL_IN_PROGRESS,
  POST_EMAIL_SUCCESS,
  POST_EMAIL_FAILURE
} from '../../constants/actionTypes.js';

export const getEmailsInProgress = () => ({
  type: POST_EMAIL_IN_PROGRESS
});
export const getEmailsSuccess = response => ({
  type: POST_EMAIL_SUCCESS,
  payload: response
});
export const getEmailsFailure = error => ({
  type: POST_EMAIL_FAILURE,
  payload: error
});

export const postEmail = (emailDetails, emailType, mentorID) => dispatch => {
  dispatch(getEmailsInProgress());
  axios
    .post(`/dashboard/mentor-panel/${mentorID}/sendEmail/${emailType}/confirm`, emailDetails)
    .then(response => {
      if (response.data.message === 'ErrorSendingEmail') {
        throw new Error('Error Sending Email');
      }

      return dispatch(getEmailsSuccess('Email Was Sent Successfully'));
    })
    .catch(err => {
      return dispatch(getEmailsFailure(`Error Sending Email: ${err.message}`));
    });
};
