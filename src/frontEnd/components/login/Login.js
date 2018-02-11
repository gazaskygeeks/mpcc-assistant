import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './Login.css';
class Login extends Component {
  constructor() {
    super();
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleInputChange(e, { name, value }) {
    const { handleInputChange } = this.props;
    handleInputChange(name, value);
  }
  _handleSubmit() {
    const { username, password, postLogin } = this.props;
    postLogin(username, password);
  }

  render() {
    console.log(this.props);
    const { loginResult, error } = this.props;

    return (
      <div className='login'>
        <Form className='form-signin'>
          <Form.Field>
            <label>First Name</label>
            <Form.Input type='text'
              name='username'
              onChange={this._handleInputChange}
              placeholder='First Name'/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Form.Input type='text' onChange={this._handleInputChange}
              name='password' placeholder='Last Name'/>
          </Form.Field>
          {!loginResult.loggedin &&
            <div className='err-msg'>
              <span>{loginResult.msg}</span>
            </div>
          }
          <Button
            onClick={this._handleSubmit}
            type='submit'>Submit</Button>
        </Form>
        {loginResult.loggedin? window.location.pathname = '/dashboard':null}
      </div>
    );
  }
}

Login.propTypes = {
  handleInputChange: PropTypes.func,
  postLogin: PropTypes.func,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isFetching: PropTypes.bool,
  loginResult: PropTypes.object,
  error: PropTypes.object
};

export default Login;
