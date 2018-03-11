import axios from 'axios';

import { GET_FORM_PROGRESS, GET_FORM_SUCCESS, GET_FORM_FAILURE,
  POST_FORM_PROGRESS, POST_FORM_SUCCESS, POST_FORM_FAILURE
} from '../../constants/actionTypes.js';

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

const postMentorFormInProgress = () => ({
  type: POST_FORM_PROGRESS
});

const postMentorFormSuccess = () => ({
  type: POST_FORM_SUCCESS
});

const postMentorFormFailure = () => ({
  type: POST_FORM_FAILURE
});

export const getMentorForm = formID => dispatch => {
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

export const postMentorForm = (formData, { formID, mentorID }) => dispatch => {
  dispatch(postMentorFormInProgress());
  formData.mentorID = mentorID;
  axios
    .post(`/dashboard/ms/post/form/${formID}`, formData)
    .then(response => console.log(response))
    .catch(err => dispatch(postMentorFormFailure(err.message)));
};
