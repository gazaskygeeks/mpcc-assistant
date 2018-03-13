import { connect } from 'react-redux';
import MentorForm from '../components/mentorForm/MentorForm';
import getMentorForm from '../actions/formActions/getMentorForm';
import postMentorForm from '../actions/formActions/postMentorForm';

const mapStateToProps = ({ mentorFormReducer }) => ({
  isFetching: mentorFormReducer.isFetching,
  form: mentorFormReducer.form,
  msg: ''
});

const mapDispatchToProps = {
  getMentorForm,
  postMentorForm
};

export default connect(mapStateToProps, mapDispatchToProps)(MentorForm);
