import { connect } from 'react-redux';

import Navbar from '../components/navbar/Navbar';

import { getNotifications } from '../actions/mentorsActions/getNotifications';

const mapStateToProps = state => ({
  notifications: state.getNotifications.notifications
});

const mapDispatchToProps = {
  getNotifications
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
