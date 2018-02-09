import {
  GET_ALL_MENTORS_IN_PROGRESS,
  GET_ALL_MENTORS_SUCCESS,
  GET_ALL_MENTORS_FAILURE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  mentors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MENTORS_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case GET_ALL_MENTORS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        mentors: action.payload.mentors
      };
    case GET_ALL_MENTORS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
