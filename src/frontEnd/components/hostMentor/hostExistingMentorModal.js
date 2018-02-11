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
    axios.post('/dashboard/host-mentor', {
      mentorData: {
        firstName:     this.props.mentors[0].first_name.value,
        lastName :     this.props.mentors[0].last_name.value,
        dateOfArrival: this.props.mentors[0].date_of_arrival.value,
        email:         this.props.mentors[0].email.value
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
        <select id='ummdm'>
          {this.props.mentors.map((mentor, index) => {
            return (
              <option key={index} value={`${mentor.first_name} ${mentor.last_name}`}>
                {`${mentor.first_name} ${mentor.last_name}`}
              </option>
            );
          })}
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
export default connect(mapStateToProps, { getAllMentors, hideUpdateMentorModal })(ExistingMentor);
