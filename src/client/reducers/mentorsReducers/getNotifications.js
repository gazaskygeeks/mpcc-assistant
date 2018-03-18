import { GET_NOTIFICATIONS_IN_PROGRESS,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_FAILURE,
  POST_NOTIFICATION_SUCCESS
} from '../../constants/actionTypes.js';

const initialState = {
  isFetching: false,
  notifications: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NOTIFICATIONS_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        notifications: payload.notifications
      };
    case POST_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: payload.notifications
      };
    case GET_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    default:
      return state;
  }
};
