import {
  SHOW_CREATE_MENTOR_DROP,
  HIDE_CREATE_MENTOR_DROP
} from '../constants/actionTypes';

const intialState = {
  modalState: false
};

export default (state = intialState, { type }) => {
  switch (type) {
    case SHOW_CREATE_MENTOR_DROP:
      return {
        ...state,
        modalState: true
      };
    case HIDE_CREATE_MENTOR_DROP:
      return {
        ...state,
        modalState: false
      };
    default:
      return state;
  }
};
