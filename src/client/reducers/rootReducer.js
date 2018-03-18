import { combineReducers } from 'redux';

import getAllMentors from './mentorsReducers/getAllMentors';
import modalState from './createMentorModalReducer';
import updateMentor from './updateMentorReducer';
import dropState from './modalDropReducer';
import postLogin from './usersReducers/postLogin';
import postFlightInfo from './flightInfoReducers/flightInfo';
import getCurrentMentor from './mentorsReducers/getCurrentMentor';
import editBio from './usersReducers/editBio';
import getEmails from './mentorsReducers/getEmails';
import postEmail from './mentorsReducers/postEmail';
import postField from './mentorsReducers/postField';
import postCheck from './mentorsReducers/postCheck';
import getNotifications from './mentorsReducers/getNotifications';
import putNotification from './mentorsReducers/putNotification';
import mentorFormReducer from './mentorForm/mentorFormReducer';
import postPermitApproval from './permitApproval/permitApproval';
import postPermissionApproval from './permissionApproval/permissionApproval';

export default combineReducers({
  getAllMentors,
  mentorFormReducer,
  postLogin,
  postFlightInfo,
  modalState,
  updateMentor,
  dropState,
  getCurrentMentor,
  editBio,
  getEmails,
  postEmail,
  postField,
  postCheck,
  getNotifications,
  putNotification,
  postPermitApproval,
  postPermissionApproval
});
