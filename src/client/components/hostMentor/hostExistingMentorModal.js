import { hideUpdateMentorModal } from '../../actions/updateMentorModalActions';
import { getAllMentors } from '../../actions/mentorsActions/getAllMentors';
import { Dropdown, Button, Form, Modal } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ExistingMentor extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      mentorData: {
        first_name: '',
        last_name: '',
        date_of_arrival: '',
        email: '',
        existing: true
      }
    };
  }

  submit(e) {
    e.preventDefault();
    axios.post('/dashboard/host-mentor', this.state.mentorData);
  }
  update(e, o) {
    const choice = o.options.filter(mentor => {
      return `${mentor.first_name} ${mentor.last_name}` === o.value;
    })[0];
    this.setState({
      first_name: choice.first_name,
      last_name: choice.last_name,
      email: choice.email,
      date_of_arrival: choice.date_of_arrival
    });
  }

  render() {
    return (
      <Modal
        open={this.props.modalStatus}
        onClose={this.props.hideUpdateMentorModal}
        closeOnRootNodeClick
        closeIcon
      >
        <Dropdown
          placeholder='Select mentor'
          fluid
          selection
          onChange={this.update}
          options={this.props.mentors.map(mentor => {
            return ({
              ...mentor,
              key: mentor.id,
              text: `${mentor.first_name} ${mentor.last_name}`,
              value: `${mentor.first_name} ${mentor.last_name}`
            });
          })}
        />
        <Button positive type='submit' onClick={this.submit}>Submit</Button>
      </Modal>
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
