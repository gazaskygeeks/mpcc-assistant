import axios from 'axios';

import {
  GET_NOTIFICATIONS_IN_PROGRESS,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_FAILURE
} from '../../constants/actionTypes.js';

export const getNotificationsInProgress = () => ({
  type: GET_NOTIFICATIONS_IN_PROGRESS
});
export const getNotificationsSuccess = notifications => ({
  type: GET_NOTIFICATIONS_SUCCESS,
  payload: notifications
});
export const getNotificationsFailure = err => ({
  type: GET_NOTIFICATIONS_FAILURE,
  payload: err
});

export const getNotifications = () => dispatch => {
  dispatch(getNotificationsInProgress());
  axios
    .get('/dashboard/api-notifications')
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Error Fetching Notifications');
      } else {
        dispatch(getNotificationsSuccess(response.data));
      }
    })
    .catch(err => {
      dispatch(getNotificationsFailure(err.message));
    });
};
