import axios from 'axios';

import {
  POST_NOTIFICATION_IN_PROGRESS,
  POST_NOTIFICATION_SUCCESS,
  POST_NOTIFICATION_FAILURE
} from '../../constants/actionTypes.js';

export const putNotificationInProgress = () => ({
  type: POST_NOTIFICATION_IN_PROGRESS
});
export const putNotificationSuccess = response => ({
  type: POST_NOTIFICATION_SUCCESS,
  payload: response
});
export const putNotificationFailure = error => ({
  type: POST_NOTIFICATION_FAILURE,
  payload: error
});

export const putNotification = notificationID => dispatch => {
  dispatch(putNotificationInProgress());
  axios
    .put(`/dashboard/notification/${notificationID}/`)
    .then(response => {
      console.log(response.data);
      const responseStatus = response.data.status;
      if (!responseStatus) {
        return dispatch(putNotificationFailure('Error Occured'));
      }
      return dispatch(putNotificationSuccess(response.data));
    })
    .catch(err => {
      console.log(err);
      return dispatch(putNotificationFailure(`Error Updating Notification: ${err.message}`));
    });
};
