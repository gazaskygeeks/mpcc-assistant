import {
  SHOW_UPDATE_MENTOR_MODAL,
  HIDE_UPDATE_MENTOR_MODAL
} from '../constants/actionTypes';

const intialState = {
  modalState: ''
};

export default (state = intialState, { type }) => {
  switch (type) {
    case SHOW_UPDATE_MENTOR_MODAL:
      return {
        ...state,
        modalState: 'active'
      };
    case HIDE_UPDATE_MENTOR_MODAL:
      return {
        ...state,
        modalState: ''
      };
    default:
      return state;
  }
};
