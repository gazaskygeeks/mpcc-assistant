import { combineReducers } from 'redux';

import getAllMentors from './mentorsReducers/getAllMentors';
import postLogin from './usersReducers/postLogin';
import postFlightInfo from './flightInfoReducers/flightInfo';

export default combineReducers({
  getAllMentors,
  postLogin,
  postFlightInfo
});
