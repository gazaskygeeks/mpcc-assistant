import { connect } from 'react-redux';

import MentorPanel from '../components/mentorPanel/MentorPanel';

import { getCurrentMentor } from '../actions/mentorsActions/getCurrentMentor';
import { getEmails } from '../actions/mentorsActions/getEmails';

const mapStateToProps = state => ({
  isFetching: state.getCurrentMentor.isFetching,
  currentMentor: state.getCurrentMentor.currentMentor,
  emails: state.getEmails.emails
});

const mapDispatchToProps = {
  getCurrentMentor,
  getEmails
};

export default connect(mapStateToProps, mapDispatchToProps)(MentorPanel);
