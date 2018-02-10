import { combineReducers } from 'redux';

import getAllMentors from './mentorsReducers/getAllMentors';
import modalState from './createMentorModalReducer';
import dropState from './modalDropReducer';

export default combineReducers({
  getAllMentors,
  modalState,
  dropState
});
