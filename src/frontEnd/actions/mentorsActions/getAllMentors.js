import axios from 'axios';

import {
  GET_ALL_MENTORS_IN_PROGRESS,
  GET_ALL_MENTORS_SUCCESS,
  GET_ALL_MENTORS_FAILURE
} from '../../constants/actionTypes.js';

export const getAllMentorsInProgress = () => ({
  type: GET_ALL_MENTORS_IN_PROGRESS
});
export const getAllMentorsSuccess = mentors => ({
  type: GET_ALL_MENTORS_SUCCESS,
  payload: mentors
});
export const getAllMentorsFailure = err => ({
  type: GET_ALL_MENTORS_FAILURE,
  payload: err
});

export const getAllMentors = () => dispatch => {
  dispatch(getAllMentorsInProgress());
  axios
    .get('/get-mentors')
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Error Fetching Mentors');
      } else {
        dispatch(getAllMentorsSuccess(response.data));
      }
    })
    .catch(err => {
      dispatch(getAllMentorsFailure(err));
    });
};
