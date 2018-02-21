import {
  SHOW_UPDATE_MENTOR_MODAL,
  HIDE_UPDATE_MENTOR_MODAL
} from '../constants/actionTypes';

export const showUpdateMentorModal = () => {
  return {
    type: SHOW_UPDATE_MENTOR_MODAL
  };
};

export const hideUpdateMentorModal = () => {
  return {
    type: HIDE_UPDATE_MENTOR_MODAL
  };
};
