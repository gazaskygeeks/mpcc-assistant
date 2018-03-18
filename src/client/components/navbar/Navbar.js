import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { showCreateMentorDrop, hideCreateMentorDrop } from '../../actions/modalDropActions';
import { showCreateMentorModal } from '../../actions/createMentorModalActions';
import { showUpdateMentorModal } from '../../actions/updateMentorModalActions';
import { Dropdown } from 'semantic-ui-react';

import './navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: '' };
    this.toggleDrop = this.toggleDrop.bind(this);
    this.showMentorModal = this.showMentorModal.bind(this);
  }

  componentDidMount() {
    const { getNotifications } = this.props;
    getNotifications();
  }

  toggleDrop() {
    if (this.props.modalStatus) {
      this.setState({ active: '' });
      this.props.hideCreateMentorDrop();
    } else {
      this.setState({ active: 'active' });
      this.props.showCreateMentorDrop();
    }
  }

  showMentorModal(e, data) {
    switch (data.value) {
      case 1: this.props.showCreateMentorModal(); break;
      case 2: this.props.showUpdateMentorModal(); break;
    }
  }

  render() {
    const { notifications, location } = this.props;
    console.log(this.props);
    let content = '';
    if (location.pathname !== '/') {
      content = (
        <nav className='navbar'>
          <div className='nav-left logo'><h1>MPCC Assistant</h1></div>
          <div className='nav-right'>
            <ul className='list'>
              <li>
                <a href='/dashboard'>
                  <i className='fa fa-home fa-2x wi'></i>
                </a>
              </li>
              <li>
                <a href='/dashboard/notifications'>
                  <i className='fas fa-bell fa-2x wi'></i>
                  {notifications.length > 0 && (
                    <span>{notifications.length}</span>
                  )}
                </a>
              </li>
              <li>
                <Dropdown text=' ' className='dropdown fa fa-plus fa-2x wi'
                  options={[{ key: 1, text: 'Host new mentor', value: 1 },
                    { key: 2, text: 'Host existing mentor', value: 2 }]}
                  compact
                  icon=''
                  onChange={this.showMentorModal}
                />
              </li>
            </ul>
          </div>
        </nav>
      );
    }
    return (
      content
    );
  }
}

const mapStateToProps = ({ dropState }) => {
  return {
    modalStatus: dropState.modalState
  };
};

Navbar.propTypes = {
  showUpdateMentorModal: PropTypes.func,
  hideCreateMentorDrop: PropTypes.func,
  showCreateMentorDrop: PropTypes.func,
  showCreateMentorModal: PropTypes.func,
  getNotifications: PropTypes.func,
  modalStatus: PropTypes.bool,
  notifications: PropTypes.array,
  location: PropTypes.object
};

export default connect(mapStateToProps,
  { showCreateMentorDrop ,
    hideCreateMentorDrop ,
    showCreateMentorModal,
    showUpdateMentorModal
  })(Navbar);
