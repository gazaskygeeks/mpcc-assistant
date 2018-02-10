import {
  SHOW_CREATE_MENTOR_DROP,
  HIDE_CREATE_MENTOR_DROP
} from '../constants/actionTypes';

const intialState = {
  modalState: ''
};

export default (state = intialState, { type }) => {
  console.log('Im at modalDropActions');
  switch (type) {
    case SHOW_CREATE_MENTOR_DROP:
      return {
        ...state,
        modalState: 'active'
      };
    case HIDE_CREATE_MENTOR_DROP:
      return {
        ...state,
        modalState: ''
      };
    default:
      return state;
  }
};
