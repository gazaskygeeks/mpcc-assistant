import { connect } from 'react-redux';

import PermissionApproval from '../components/permissionApproval/PermissionApproval';

import { postPermissionApproval } from '../actions/permissioApproval/permissionApproval';
import { getCurrentMentor } from '../actions/mentorsActions/getCurrentMentor';

const mapStateToProps = state => ({
  isFetching: state.getCurrentMentor.isFetching,
  currentMentor: state.getCurrentMentor.currentMentor,
  permissionApprovalResult: state.postPermissionApproval.permissionApprovalResult
});

const mapDispatchToProps = {
  getCurrentMentor,
  postPermissionApproval
};

export default connect(mapStateToProps, mapDispatchToProps)(PermissionApproval);
