import { connect } from 'react-redux';

import SendEmail from '../components/mentorPanel/sendEmail/SendEmail';

import { postEmail } from '../actions/mentorsActions/postEmail';
import { handleInputChange } from '../actions/usersActions/handleInputChangeActions';

const mapStateToProps = state => ({
  isFetching: state.getCurrentMentor.isFetching,
  sendEmailResponse: state.postEmail.response,
  to: state.postEmail.to,
  cc: state.postEmail.cc,
  bcc: state.postEmail.bcc,
  subject: state.postEmail.subject,
  content: state.postEmail.content,
  error: state.postEmail.error
});

const mapDispatchToProps = {
  postEmail,
  handleInputChange
};

export default connect(mapStateToProps, mapDispatchToProps)(SendEmail);
