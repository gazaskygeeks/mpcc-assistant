import { connect } from 'react-redux';
import Waiver from '../components/waiver/Waiver';

const mapStateToProps = state => {
  isFetching: state.isFetching
};

export default connect(mapStateToProps, {})(Waiver);
