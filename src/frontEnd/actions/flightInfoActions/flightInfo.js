import axios from 'axios';

import {
  POST_FLIGHT_INFO_IN_PROGRESS,
  POST_FLIGHT_INFO_SUCCESS,
  POST_FLIGHT_INFO_BAD,
  POST_FLIGHT_INFO_FAILURE
} from '../../constants/actionTypes.js';

export const postFlightInfoInProgress = () => ({
  type: POST_FLIGHT_INFO_IN_PROGRESS
});
export const postFlightInfoSuccess = flightInfoResult => ({
  type: POST_FLIGHT_INFO_SUCCESS,
  payload: flightInfoResult
});
export const postFlightInfoBad = flightInfoResult => ({
  type: POST_FLIGHT_INFO_BAD,
  payload: flightInfoResult
});
export const postFlightInfoFailure = err => ({
  type: POST_FLIGHT_INFO_FAILURE,
  payload: err
});

export const postFlightInfo =
(mentor_email, date_of_arrival, time_of_arrival, flight_number) => dispatch => {
  dispatch(postFlightInfoInProgress());
  axios.post('/submit/flight-info/confirm', {
    mentor_email,
    date_of_arrival,
    time_of_arrival,
    flight_number
  })
    .then(response => {
      const flightInfoResult = response.data;
      if (flightInfoResult.exists === false) {
        return dispatch(postFlightInfoBad(flightInfoResult));
      } else if (flightInfoResult.update) return dispatch(postFlightInfoSuccess(flightInfoResult));
    })
    .catch(err => {
      dispatch(postFlightInfoFailure(err));
    });
};
