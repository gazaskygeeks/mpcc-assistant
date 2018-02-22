import axios from 'axios';

import {
  POST_CHECK_IN_PROGRESS,
  POST_CHECK_SUCCESS,
  POST_CHECK_FAILURE
} from '../../constants/actionTypes.js';

export const postCheckInProgress = () => ({
  type: POST_CHECK_IN_PROGRESS
});
export const postCheckSuccess = response => ({
  type: POST_CHECK_SUCCESS,
  payload: response
});
export const postCheckFailure = error => ({
  type: POST_CHECK_FAILURE,
  payload: error
});

export const postCheck = (docType, mentorID) => dispatch => {
  dispatch(postCheckInProgress());
  axios
    .post(`/dashboard/mentor-panel/${mentorID}/check/${docType}`)
    .then(response => {
      const responseStatus = response.data.update;
      if (!responseStatus) {
        return dispatch(postCheckFailure('Error Occured'));
      }
      const currentMentor = response.data.currentMentor;
      return dispatch(postCheckSuccess(currentMentor));
    })
    .catch(err => {
      return dispatch(postCheckFailure(`Error Updating Check: ${err.message}`));
    });
};
