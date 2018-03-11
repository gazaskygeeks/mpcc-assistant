import axios from 'axios';

import {
  POST_PERMISSION_APPROVAL_IN_PROGRESS,
  POST_PERMISSION_APPROVAL_SUCCESS,
  POST_PERMISSION_APPROVAL_FAILURE
} from '../../constants/actionTypes.js';

export const postPermissionApprovalInProgress = () => ({
  type: POST_PERMISSION_APPROVAL_IN_PROGRESS
});

export const postPermissionApprovalSuccess = permissionApprovalResult => ({
  type: POST_PERMISSION_APPROVAL_SUCCESS,
  payload: permissionApprovalResult
});

export const postPermissionApprovalFailure = err => ({
  type: POST_PERMISSION_APPROVAL_FAILURE,
  payload: err
});

export const postPermissionApproval =
(_permission_approval_status, mentorID) => dispatch => {
  dispatch(postPermissionApprovalInProgress);
  axios.post(`/dashboard/mc/permission-approval/${mentorID}`, {
    _permission_approval_status
  }).then(response => {
    const permissionApprovalResult = response.data;
    if (permissionApprovalResult.status === true)
      return dispatch(postPermissionApprovalSuccess(permissionApprovalResult));
  }).catch(err => dispatch(postPermissionApprovalFailure(err)));
};
