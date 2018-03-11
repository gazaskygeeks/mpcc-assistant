import { connect } from 'react-redux';
import MentorForm from '../components/mentorForm/MentorForm';
import { getMentorForm, postMentorForm } from '../actions/mentorsActions/getMentorForm';

const mapStateToProps = ({ mentorFormReducer }) => ({
  isFetching: mentorFormReducer.isFetching,
  form: mentorFormReducer.form
});

const mapDispatchToProps = {
  getMentorForm,
  postMentorForm
};

export default connect(mapStateToProps, mapDispatchToProps)(MentorForm);
