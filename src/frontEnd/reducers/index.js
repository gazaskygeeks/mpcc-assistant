import { combineReducers } from 'redux';

import getAllMentors from './mentorsReducers/getAllMentors';
import getCurrentMentor from './mentorsReducers/getCurrentMentor';
import postLogin from './usersReducers/postLogin';
import editBio from './usersReducers/editBio';

export default combineReducers({
  getAllMentors,
  getCurrentMentor,
  postLogin,
  editBio
});
