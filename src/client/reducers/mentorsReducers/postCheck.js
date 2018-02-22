import { POST_CHECK_IN_PROGRESS,
  POST_CHECK_SUCCESS,
  POST_CHECK_FAILURE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  responseStatus: false,
  error: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_CHECK_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case POST_CHECK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        responseStatus: payload
      };
    case POST_CHECK_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
        responseStatus: ''
      };
    default:
      return state;
  }
};
