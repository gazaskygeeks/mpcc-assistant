import {
  GET_FORM_PROGRESS, GET_FORM_SUCCESS, GET_FORM_FAILURE
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  form: {
    id: 0,
    title: 'Form title',
    description: 'Form desription',
    nodes: [
      {
        title: 'node label',
        type: 'input type',
        value: '',
        description: 'optional',
        warn: 'optional'
      }
    ]
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FORM_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case GET_FORM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        form: payload[0].vars
      };
    case GET_FORM_FAILURE:
      return {
        ...state,
        isFetching: false,
        form: null
      };
    default:
      return state;
  }
};
