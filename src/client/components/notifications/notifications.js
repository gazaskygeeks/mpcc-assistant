import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './notifications.css';
class Notifications extends Component {
  render() {
    return (
      <div className='notifications__wrapper'>
        <Header as='h1'>Notifications</Header>
        <div className='notifications__container'>
          <Button
            onClick={this._handleSubmit}
            type='submit'>
            Read All
          </Button>
          <ul className='notifications__list'>
            <li>
              A Mentor Have been updated.
              <Button
                onClick={this._handleSubmit}
                type='submit'>
                Read
              </Button>
            </li>
            <li>
              A Mentor Have been updated.
              <Button
                onClick={this._handleSubmit}
                type='submit'>
                Read
              </Button>
            </li>
            <li>
              A Mentor Have been updated.
              <Button
                onClick={this._handleSubmit}
                type='submit'>
                Read
              </Button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
};

export default Notifications;
