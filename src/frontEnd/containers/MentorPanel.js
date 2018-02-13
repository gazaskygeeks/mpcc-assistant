import { connect } from 'react-redux';

import MentorPanel from '../components/mentorPanel/MentorPanel';

import { getCurrentMentor } from '../actions/mentorsActions/getCurrentMentor';

const mapStateToProps = state => ({
  isFetching: state.getCurrentMentor.isFetching,
  currentMentor: state.getCurrentMentor.currentMentor
});

const mapDispatchToProps = {
  getCurrentMentor
};

export default connect(mapStateToProps, mapDispatchToProps)(MentorPanel);
