import axios from 'axios';

import {
  EDIT_IN_PROGRESS,
  EDIT_SUCCESS,
  EDIT_FAILURE
} from '../../constants/actionTypes.js';

export const editInProgress = () => ({
  type: EDIT_IN_PROGRESS
});
export const editSuccess = updateResult => ({
  type: EDIT_SUCCESS,
  payload: updateResult
});
export const editFailure = err => ({
  type: EDIT_FAILURE,
  payload: err
});

export const edit = name => dispatch => {
  dispatch(editInProgress());
  axios.post('/dashboard/mentor-panel/:mentorSelector/edit/:fieldType', {
    name
  })
    .then(response => {
      const updateResult = response.data;
      dispatch(editSuccess(updateResult));
    })
    .catch(err => {
      dispatch(editFailure(err));
    });
};
