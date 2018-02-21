import { POST_FIELD_IN_PROGRESS,
  POST_FIELD_SUCCESS,
  POST_FIELD_FAILURE,
  HANDLE_INPUT_CHANGE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  response: {},
  error: '',
  fieldType: '',
  fieldValue: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_FIELD_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case POST_FIELD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        response: payload
      };
    case POST_FIELD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
        response: ''
      };
    case HANDLE_INPUT_CHANGE: {
      return {
        ...state,
        fieldType: payload.name,
        fieldValue: payload.value
      };
    }
    default:
      return state;
  }
};
