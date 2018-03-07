import {
  POST_PERMIT_APPROVAL_IN_PROGRESS,
  POST_PERMIT_APPROVAL_SUCCESS,
  POST_PERMIT_APPROVAL_FAILURE,
  HANDLE_INPUT_CHANGE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  permitApprovalResult: {},
  _permit_approval_status: false,
  _permit_number: '',
  error: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_PERMIT_APPROVAL_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case POST_PERMIT_APPROVAL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        permitApprovalResult: payload
      };
    case POST_PERMIT_APPROVAL_FAILURE:
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
