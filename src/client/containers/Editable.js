import { connect } from 'react-redux';

import Editable from '../components/mentorPanel/Stages/Editable';

import { postField } from '../actions/mentorsActions/postField';
import { handleInputChange } from '../actions/usersActions/handleInputChangeActions';

const mapStateToProps = state => ({
  isFetching: state.postField.isFetching,
  postFieldResponse: state.postField.response,
  error: state.postField.error,
  fieldType: state.postField.fieldType,
  fieldValue: state.postField.fieldValue
});

const mapDispatchToProps = {
  postField,
  handleInputChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Editable);
