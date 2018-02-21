import {
  GET_CURRENT_MENTOR_IN_PROGRESS,
  GET_CURRENT_MENTOR_SUCCESS,
  POST_FIELD_SUCCESS,
  GET_CURRENT_MENTOR_FAILURE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  currentMentor: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CURRENT_MENTOR_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case GET_CURRENT_MENTOR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentMentor: payload
      };
    case POST_FIELD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentMentor: payload
      };
    case GET_CURRENT_MENTOR_FAILURE:
      return {
        ...state,
        isFetching: false,
        currentMentor: payload
      };
    default:
      return state;
  }
};
