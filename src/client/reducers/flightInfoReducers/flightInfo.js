import {
  POST_FLIGHT_INFO_IN_PROGRESS,
  POST_FLIGHT_INFO_SUCCESS,
  POST_FLIGHT_INFO_FAILURE,
  POST_FLIGHT_INFO_BAD,
  HANDLE_INPUT_CHANGE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  flightInfoResult: {},
  mentor_email: '',
  date_of_arrival: '',
  time_of_arrival: '',
  flight_number: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_FLIGHT_INFO_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case POST_FLIGHT_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        flightInfoResult: payload
      };
    case POST_FLIGHT_INFO_BAD:
      return {
        ...state,
        isFetching: false,
        flightInfoResult: payload
      };
    case POST_FLIGHT_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    case HANDLE_INPUT_CHANGE: {
      return {
        ...state,
        [payload.name]: payload.value
      };
    }
    default:
      return state;
  }
};
