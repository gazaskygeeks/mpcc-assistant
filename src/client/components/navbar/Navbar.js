import React from 'react';
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
    let content = '';
    if (window.location.pathname !== '/') {
      content = (<nav className='navbar'>
        <div className='nav-left logo'><h1>MPCC Assistant</h1></div>
        <div className='nav-right'>
          <ul className='list'>
            <li><a href='/dashboard'><i className='fa fa-home fa-2x wi'></i></a></li>
            <li>
              <Dropdown text=' ' className='dropdown fa fa-plus fa-2x wi'
                options={[{ key: 1, text: 'Host new mentor', value: 1 },
                  { key: 2, text: 'Host existing mentor', value: 2 }]}
                compact
                icon='none'
                onChange={this.showMentorModal}
              />
            </li>
          </ul>
        </div>
      </nav>);
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

export default connect(mapStateToProps,
  { showCreateMentorDrop ,
    hideCreateMentorDrop ,
    showCreateMentorModal,
    showUpdateMentorModal
  })(Navbar);
