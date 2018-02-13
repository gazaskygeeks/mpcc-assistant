import {
  EDIT_BIO_IN_PROGRESS,
  EDIT_BIO_SUCCESS,
  EDIT_BIO_FAILURE,
  HANDLE_INPUT_CHANGE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  updateResult: {},
  bio: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_BIO_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case EDIT_BIO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        updateResult: payload
      };
    case EDIT_BIO_FAILURE:
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
