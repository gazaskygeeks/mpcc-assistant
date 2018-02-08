import {
  HANDLE_INPUT_CHANGE
} from '../../constants/actionTypes.js';

export const handleInputChange = (name, value) => ({
  type: HANDLE_INPUT_CHANGE,
  payload: { name, value }
});
