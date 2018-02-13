import { combineReducers } from 'redux';

import getAllMentors from './mentorsReducers/getAllMentors';
import modalState from './createMentorModalReducer';
import updateMentor from './updateMentorReducer';
import dropState from './modalDropReducer';
import postLogin from './usersReducers/postLogin';
import postFlightInfo from './flightInfoReducers/flightInfo';
import getCurrentMentor from './mentorsReducers/getCurrentMentor';
import editBio from './usersReducers/editBio';

export default combineReducers({
  getAllMentors,
  postLogin,
  postFlightInfo,
  modalState,
  updateMentor,
  dropState,
  getCurrentMentor,
  editBio
});
