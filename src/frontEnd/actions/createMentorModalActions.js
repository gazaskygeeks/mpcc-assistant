import {
  SHOW_CREATE_MENTOR_MODAL,
  HIDE_CREATE_MENTOR_MODAL
} from '../constants/actionTypes';

export const showCreateMentorModal = () => {
  return {
    type: SHOW_CREATE_MENTOR_MODAL
  };
};

export const hideCreateMentorModal = () => {
  return {
    type: HIDE_CREATE_MENTOR_MODAL
  };
};
