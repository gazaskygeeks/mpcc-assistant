import { connect } from 'react-redux';

import Editable from '../components/mentorPanel/Stages/Check';

import { postCheck } from '../actions/mentorsActions/postCheck';

const mapStateToProps = state => ({
  isFetching: state.postCheck.isFetching,
  responseStatus: state.postCheck.responseStatus,
  error: state.postCheck.error
});

const mapDispatchToProps = {
  postCheck
};

export default connect(mapStateToProps, mapDispatchToProps)(Editable);
