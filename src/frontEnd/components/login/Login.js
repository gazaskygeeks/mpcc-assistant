import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';

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
    const { isFetching, loginResult, username, password, error } = this.props;

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
          {error &&
          <div>
            <span>error.message</span>
          </div>}
          <Button
            onClick={this._handleSubmit}
            type='submit'>Submit</Button>
        </Form>
        {status? window.location.pathname = '/dashboard':null}
      </div>
    );
  }
}

export default Login;
