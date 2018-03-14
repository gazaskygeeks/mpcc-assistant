import axios from 'axios';

import {
  POST_PERMIT_APPROVAL_IN_PROGRESS,
  POST_PERMIT_APPROVAL_SUCCESS,
  POST_PERMIT_APPROVAL_FAILURE
} from '../../constants/actionTypes.js';

export const postPermitApprovalInProgress = () => ({
  type: POST_PERMIT_APPROVAL_IN_PROGRESS
});

export const postPermitApprovalSuccess = permitApprovalResult => ({
  type: POST_PERMIT_APPROVAL_SUCCESS,
  payload: permitApprovalResult
});

export const postPermitApprovalFailure = err => ({
  type: POST_PERMIT_APPROVAL_FAILURE,
  payload: err
});

export const postPermitApproval =
(_permit_approval_status, _permit_number, mentorID) => dispatch => {
  dispatch(postPermitApprovalInProgress);
  axios.post(`/dashboard/mc/permit-approval/${mentorID}`, {
    _permit_approval_status,
    _permit_number
  }).then(response => {
    const permitApprovalResult = response.data;
    if (permitApprovalResult.status === true)
      return dispatch(postPermitApprovalSuccess(permitApprovalResult));
  }).catch(err => dispatch(postPermitApprovalFailure(err)));
};
