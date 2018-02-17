import axios from 'axios';

import {
  EDIT_BIO_IN_PROGRESS,
  EDIT_BIO_IN_PROGRESS,
  EDIT_BIO_FAILURE
} from '../../constants/actionTypes.js';

export const editBioInProgress = () => ({
  type: EDIT_BIO_IN_PROGRESS
});
export const editBioSuccess = updateResult => ({
  type: EDIT_BIO_IN_PROGRESS,
  payload: updateResult
});
export const editBioFailure = err => ({
  type: EDIT_BIO_FAILURE,
  payload: err
});

export const editBio = bio => dispatch => {
  dispatch(editBioInProgress());
  axios.post('/dashboard/mentor-panel/:mentorSelector/edit/:fieldType', {
    bio
  })
    .then(response => {
      const updateResult = response.data;
      dispatch(editBioSuccess(updateResult));
    })
    .catch(err => {
      dispatch(editBioFailure(err));
    });
};
