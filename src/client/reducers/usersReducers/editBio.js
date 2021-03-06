import {
  EDIT_IN_PROGRESS,
  EDIT_SUCCESS,
  EDIT_FAILURE,
  HANDLE_INPUT_CHANGE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  updateResult: {},
  name: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        updateResult: payload
      };
    case EDIT_FAILURE:
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
