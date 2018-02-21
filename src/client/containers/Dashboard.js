import { connect } from 'react-redux';

import Dashboard from '../components/dashboard/Dashboard';

import { getAllMentors } from '../actions/mentorsActions/getAllMentors';
import { getCurrentMentor } from '../actions/mentorsActions/getCurrentMentor';

const mapStateToProps = state => ({
  isFetching: state.getAllMentors.isFetching,
  mentors: state.getAllMentors.mentors,
  success: state.getCurrentMentor.success
});

const mapDispatchToProps = {
  getAllMentors,
  getCurrentMentor
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
