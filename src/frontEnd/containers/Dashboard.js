import { connect } from 'react-redux';

import Dashboard from '../components/dashboard/Dashboard';

import { getAllMentors } from '../actions/mentorsActions/getAllMentors';

const mapStateToProps = state => ({
  isFetching: state.getAllMentors.isFetching,
  mentors: state.getAllMentors.mentors
});

const mapDispatchToProps = {
  getAllMentors
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
