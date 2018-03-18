import axios from 'axios';

import {
  GET_FORM_PROGRESS,
  GET_FORM_SUCCESS,
  GET_FORM_FAILURE } from '../../constants/actionTypes.js';

const getMentorFormInProgress = () => ({
  type: GET_FORM_PROGRESS
});
const getMentorFormSuccess = form => ({
  type: GET_FORM_SUCCESS,
  payload: form,
  msg: 'GetFormSuccess'
});
const getMentorFormFailure = err => ({
  type: GET_FORM_FAILURE,
  msg: err
});

export default formID => dispatch => {
  dispatch(getMentorFormInProgress());
  axios
    .get(`/dashboard/ms/get/form/${formID}`)
    .then(response => {
      const { form } = response.data;
      if (form) {
        return dispatch(getMentorFormSuccess(form));
      }
      return dispatch(getMentorFormFailure('GetFormFailure'));
    })
    .catch(err => dispatch(getMentorFormFailure(err.message)));
};
