import { connect } from 'react-redux';

import MentorProfile from '../components/mentorProfile/MentorProfile';

import { getCurrentMentor } from '../actions/mentorsActions/getCurrentMentor';

const mapStateToProps = state => ({
  isFetching: state.getCurrentMentor.isFetching,
  currentMentor: state.getCurrentMentor.currentMentor
});

const mapDispatchToProps = {
  getCurrentMentor
};

export default connect (mapStateToProps, mapDispatchToProps)(MentorProfile);
