import { GET_EMAILS_IN_PROGRESS,
  GET_EMAILS_SUCCESS,
  GET_EMAILS_FAILURE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  emails: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EMAILS_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case GET_EMAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        emails: payload
      };
    case GET_EMAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    default:
      return state;
  }
};
