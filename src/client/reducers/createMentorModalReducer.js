import {
  SHOW_CREATE_MENTOR_MODAL,
  HIDE_CREATE_MENTOR_MODAL
} from '../constants/actionTypes';

const intialState = {
  modalState: false
};

export default (state = intialState, { type }) => {
  switch (type) {
    case SHOW_CREATE_MENTOR_MODAL:
      return {
        ...state,
        modalState: true
      };
    case HIDE_CREATE_MENTOR_MODAL:
      return {
        ...state,
        modalState: false
      };
    default:
      return state;
  }
};
