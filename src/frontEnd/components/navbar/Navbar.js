import React from 'react';
import { connect } from 'react-redux';
import { showCreateMentorDrop, hideCreateMentorDrop } from '../../actions/modalDropActions';
import { showCreateMentorModal } from '../../actions/createMentorModalActions';
import { showUpdateMentorModal } from '../../actions/updateMentorModalActions';
import './navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: '' };
    this.toggleDrop = this.toggleDrop.bind(this);
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

  render() {
    return (
      <nav className='navbar'>
        <div className='nav-left logo'><h1>MPCC Assistant</h1></div>
        <div className='nav-right'>
          <ul className='list'>
            <li><a href='/dashboard'><i className='fa fa-home fa-2x wi'></i></a></li>
            <li><i onClick={this.toggleDrop} className='fa fa-plus fa-2x wi'></i>
            </li>
            <ul className={`hr-drop ${this.state.active}`}>
              <li><a onClick={this.props.showCreateMentorModal}>Host new mentor</a></li>
              <li><a onClick={this.props.showUpdateMentorModal}>Sechedule with existing</a></li>
            </ul>
          </ul>
        </div>
      </nav>
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
