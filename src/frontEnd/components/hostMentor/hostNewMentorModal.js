import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { hideCreateMentorModal } from '../../actions/createMentorModalActions';
import './hostNewMentorModal.css';

class NewMentor extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      mentorData: {
        firstName:     '',
        lastName :     '',
        dateOfArrival: '',
        email:         '',
        existing: false
      }
    };
  }

  submit(e) {
    e.preventDefault();
    console.log('Im sending!!');
    axios.post('/dashboard/host-mentor', {
      mentorData: {
        firstName:     document.querySelector('#fname').value,
        lastName :     document.querySelector('#lname').value,
        dateOfArrival: document.querySelector('#doarr').value,
        email:         document.querySelector('#email').value
      }
    });
  }

  render() {
    return (
      <div className={`new-mentor-modal ${this.props.modalStatus}`}>
        <h1>
        Host New Mentor
          <span onClick={this.props.hideCreateMentorModal} className='fas fa-times'></span>
        </h1>
        <label>First Name</label>       <input type='text' id='fname'/>
        <label>Last Name</label>        <input type='text' id='lname'/>
        <label>Date Of Arrival</label>  <input type='date' id='doarr'/>
        <label>Email</label>            <input type='text' id='email'/>
        <button type='submit' onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = ({ modalState }) => {
  return {
    modalStatus: modalState.modalState
  };
};

export default connect(mapStateToProps, { hideCreateMentorModal })(NewMentor);
