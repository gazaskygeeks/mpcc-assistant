import { connect } from 'react-redux';
import PersonalPicture from '../components/personalPicture/personalPicture';

const mapStateToProps = state => (
  {
    isFetching: state.isFetching,
    data: state.data
  }
);

export default connect(mapStateToProps, {})(PersonalPicture);
