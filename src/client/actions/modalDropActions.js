import {
  SHOW_CREATE_MENTOR_DROP,
  HIDE_CREATE_MENTOR_DROP
} from '../constants/actionTypes';

export const showCreateMentorDrop = () => {
  return {
    type: SHOW_CREATE_MENTOR_DROP
  };
};

export const hideCreateMentorDrop = () => {
  return {
    type: HIDE_CREATE_MENTOR_DROP
  };
};
