import { POST_NOTIFICATION_IN_PROGRESS,
  POST_NOTIFICATION_SUCCESS,
  POST_NOTIFICATION_FAILURE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  response: '',
  error: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_NOTIFICATION_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case POST_NOTIFICATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        response: payload.status
      };
    case POST_NOTIFICATION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
        response: ''
      };
    default:
      return state;
  }
};
