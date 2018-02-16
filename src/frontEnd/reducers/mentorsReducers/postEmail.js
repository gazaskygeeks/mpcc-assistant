import { POST_EMAIL_IN_PROGRESS,
  POST_EMAIL_SUCCESS,
  POST_EMAIL_FAILURE,
  HANDLE_INPUT_CHANGE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  response: '',
  error: '',
  to: '',
  cc: '',
  bcc: '',
  subject: '',
  content: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_EMAIL_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case POST_EMAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        response: payload
      };
    case POST_EMAIL_FAILURE:
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
