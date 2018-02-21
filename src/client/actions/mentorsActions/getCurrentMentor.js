import axios from 'axios';

import {
  GET_CURRENT_MENTOR_IN_PROGRESS,
  GET_CURRENT_MENTOR_SUCCESS,
  GET_CURRENT_MENTOR_FAILURE
} from '../../constants/actionTypes.js';

export const getCurrentMentorInProgress = () => ({
  type: GET_CURRENT_MENTOR_IN_PROGRESS
});
export const getCurrentMentorSuccess = currentMentor => ({
  type: GET_CURRENT_MENTOR_SUCCESS,
  payload: currentMentor
});
export const getCurrentMentorFailure = error => ({
  type: GET_CURRENT_MENTOR_FAILURE,
  payload: error
});

export const getCurrentMentor = mentorID => dispatch => {
  dispatch(getCurrentMentorInProgress());
  axios
    .get(`/dashboard/mentor-panel/${mentorID}`)
    .then(response => {
      const { data } = response;
      if (data.mentorData) {
        return dispatch(getCurrentMentorSuccess(data.mentorData[0]));
      }

      return dispatch(getCurrentMentorFailure(data.msg));
    })
    .catch(err => {
      return dispatch(getCurrentMentorFailure(err.message));
    });
};
