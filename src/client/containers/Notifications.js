import { connect } from 'react-redux';

import Notifications from '../components/notifications/notifications';

import { getNotifications } from '../actions/mentorsActions/getNotifications';
import { putNotification } from '../actions/mentorsActions/putNotification';

const mapStateToProps = state => ({
  isFetching: state.getNotifications.isFetching,
  notifications: state.getNotifications.notifications,
  fetchingPut: state.putNotification.isFetching,
  response: state.putNotification.response,
  error: state.putNotification.error
});

const mapDispatchToProps = {
  getNotifications,
  putNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
