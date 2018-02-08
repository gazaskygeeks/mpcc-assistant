import { connect } from 'react-redux';

import Login from '../components/login/Login';

import { postLogin } from '../actions/usersActions/postLogin';
import { handleInputChange } from '../actions/usersActions/handleInputChangeActions';

const mapStateToProps = state => ({
  isFetching: state.postLogin.isFetching,
  status: state.postLogin.status,
  username: state.postLogin.username,
  password: state.postLogin.password
});

const mapDispatchToProps = {
  postLogin,
  handleInputChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
