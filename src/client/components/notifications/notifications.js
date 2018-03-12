import React, { Component } from 'react';
import { Header, Button, Message, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './notifications.css';
class Notifications extends Component {
  componentDidMount() {
    const { getNotifications } = this.props;
    getNotifications();
  }

  _handleSubmit(event) {
    const { putNotification } = this.props;
    const notificationID = event.target.value;
    putNotification(notificationID);
  }

  render() {
    const { isFetching, fetchingPut, notifications } = this.props;
    const refKeys = {
      permit: 'Permit Request Updated',
      permission: 'Permission Request Updated',
      form: {}
    };

    let content = '';
    if (isFetching) {
      content = (
        <div className='notifications__loading'>
          <Message icon>
            <Icon name='circle notched' loading />
            <Message.Content>
              <Message.Header>Just one second</Message.Header>
              We are fetching that content for you.
            </Message.Content>
          </Message>
        </div>
      );
    } else if (!notifications.length) {
      content = (
        <div className='notifications__empty'>
          <Message className='notifications__empty'>
            <i className='fas fa-exclamation-triangle fa-5x'></i>
            Nothing New!
          </Message>
        </div>
      );
    } else if (notifications) {
      content = (
        <div className='notifications__container'>
          <Button
            onClick={this._handleSubmit.bind(this)}
            type='submit'
            value={0}>
            Read All
          </Button>
          <ul className='notifications__list'>
            {notifications.map((notification, index) => {
              return (
                <li key={index}>
                  <p>
                    A <a href={`/dashboard/panel/${notification.mentor_id}`}>Mentor </a>
                    have been updated: {Object.keys(refKeys).map(ref => {
                      if (ref === notification.ref) {
                        return refKeys[ref];
                      }
                    })}
                  </p>
                  {fetchingPut && (
                    <Button
                      loading>
                      Read
                    </Button>

                  )}
                  {!fetchingPut && (
                    <Button
                      onClick={this._handleSubmit.bind(this)}
                      type='submit'
                      value={notification.id}>
                      Read
                    </Button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    return (
      <div className='notifications__wrapper'>
        <Header as='h1'>Notifications</Header>
        {content}
      </div>
    );
  }
}

Notifications.propTypes = {
  _handleSubmit: PropTypes.func,
  getNotifications: PropTypes.func,
  putNotification: PropTypes.func,
  isFetching: PropTypes.bool,
  fetchingPut: PropTypes.bool,
  notifications: PropTypes.array
};

export default Notifications;
