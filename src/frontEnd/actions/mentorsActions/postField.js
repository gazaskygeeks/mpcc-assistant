import axios from 'axios';

import {
  POST_FIELD_IN_PROGRESS,
  POST_FIELD_SUCCESS,
  POST_FIELD_FAILURE
} from '../../constants/actionTypes.js';

export const postFieldInProgress = () => ({
  type: POST_FIELD_IN_PROGRESS
});
export const postFieldSuccess = response => ({
  type: POST_FIELD_SUCCESS,
  payload: response
});
export const postFieldFailure = error => ({
  type: POST_FIELD_FAILURE,
  payload: error
});

export const postField = (fieldType, value, mentorID) => (dispatch, setState) => {
  dispatch(postFieldInProgress());
  const fieldDetails = {};
  fieldDetails[fieldType] = value;
  axios
    .post(`/dashboard/mentor-panel/${mentorID}/edit/${fieldType}`, fieldDetails)
    .then(response => {
      if (response.data.msg !== 'MENTOR_UPDATED') {
        throw new Error('Error Updating Field');
      }
      setState().getCurrentMentor.currentMentor = response.data.updatedMentor;
      return dispatch(postFieldSuccess('Field Was Updated Successfully'));
    })
    .catch(err => {
      return dispatch(postFieldFailure(`Error Updating Field: ${err.message}`));
    });
};
