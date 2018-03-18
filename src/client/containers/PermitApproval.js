import { connect } from 'react-redux';

import PermitApproval from '../components/permitApproval/PermitApproval';

import { postPermitApproval } from '../actions/permitApproval/permitApproval';
import { handleInputChange } from '../actions/usersActions/handleInputChangeActions';

const mapStateToProps = state => ({
  isFetching: state.postPermitApproval.isFetching,
  permitApprovalResult: state.postPermitApproval.permitApprovalResult,
  _permit_approval_status: state.postPermitApproval._permit_approval_status,
  _permit_number: state.postPermitApproval._permit_number
});

const mapDispatchToProps = {
  postPermitApproval,
  handleInputChange
};

export default connect(mapStateToProps, mapDispatchToProps)(PermitApproval);
