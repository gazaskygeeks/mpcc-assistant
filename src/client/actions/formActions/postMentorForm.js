import axios from 'axios';

import {
  POST_FORM_PROGRESS,
  POST_FORM_SUCCESS,
  POST_FORM_FAILURE } from '../../constants/actionTypes';

const postMentorFormInProgress = () => ({
  type: POST_FORM_PROGRESS
});

const postMentorFormSuccess = () => ({
  type: POST_FORM_SUCCESS
});

const postMentorFormFailure = () => ({
  type: POST_FORM_FAILURE
});

export default (formData, { formID, mentorID }) => dispatch => {
  dispatch(postMentorFormInProgress());
  formData.mentorID = mentorID;
  axios
    .post(`/dashboard/ms/post/form/${formID}`, formData)
    .then(() => postMentorFormSuccess())
    .catch(err => dispatch(postMentorFormFailure(err.message)));
};
