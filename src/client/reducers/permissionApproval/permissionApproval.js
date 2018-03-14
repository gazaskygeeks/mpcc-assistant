import {
  POST_PERMISSION_APPROVAL_IN_PROGRESS,
  POST_PERMISSION_APPROVAL_SUCCESS,
  POST_PERMISSION_APPROVAL_FAILURE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  permissionApprovalResult: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_PERMISSION_APPROVAL_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case POST_PERMISSION_APPROVAL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        permissionApprovalResult: payload
      };
    case POST_PERMISSION_APPROVAL_FAILURE:
      return {
        ...state,
        isFetching: false,
        permissionApprovalResult: payload
      };
    default:
      return state;
  }
};
