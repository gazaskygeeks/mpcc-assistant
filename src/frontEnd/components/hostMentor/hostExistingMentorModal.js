import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getAllMentors } from '../../actions/mentorsActions/getAllMentors';
import { hideUpdateMentorModal } from '../../actions/updateMentorModalActions';

import './hostExistingMentorModal.css';

class ExistingMentor extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      mentorData: {
        firstName:     '',
        lastName :     '',
        dateOfArrival: '',
        email:         '',
        existing: true
      },
      modalState: ''
    };
  }

  submit(e) {
    e.preventDefault();
    console.log('Im sending!!');
    axios.post('/dashboard/host-mentor', {
      mentorData: {
        firstName:     document.querySelector('').value,
        lastName :     document.querySelector('').value,
        dateOfArrival: document.querySelector('').value,
        email:         document.querySelector('').value
      }
    });
  }

  render() {
    return (
      <div className={`existing-mentor-modal ${this.props.modalStatus}`}>
        <h1>
          Rescedule Visit
          <span onClick={this.props.hideUpdateMentorModal} className='fas fa-times'></span>
        </h1>
        <label>Name</label>
        <select>
          Loop me here***
        </select>
        <button type='submit' onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalStatus: state.updateMentor.modalState,
    mentors: state.getAllMentors.mentors
  };
};
console.log('mentors', getAllMentors);
export default connect(mapStateToProps, { getAllMentors, hideUpdateMentorModal })(ExistingMentor);
