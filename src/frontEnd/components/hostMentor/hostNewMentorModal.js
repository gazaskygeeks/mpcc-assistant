import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Form, Modal } from 'semantic-ui-react';
import { hideCreateMentorModal } from '../../actions/createMentorModalActions';

import './hostNewMentorModal.css';

class NewMentor extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      mentorData: {
        existing: false
      }
    };
  }

  submit(e) {
    e.preventDefault();
    axios.post('/dashboard/host-mentor', {
      mentorData: {
        date_of_arrival: this.state.mentorData.dateOfArrival,
        first_name: this.state.mentorData.firstName,
        last_name: this.state.mentorData.lastName,
        email: this.state.mentorData.email
      }
    });
  }

  handleChange(e) {
    const mentorData = Object.assign({}, this.state.mentorData);
    mentorData[e.target.name] = e.target.value;
    this.setState({ mentorData });
  }

  render() {
    return (
      <Modal
        open={this.props.modalStatus}
        onClose={this.props.hideCreateMentorModal}
        closeOnRootNodeClick
        closeIcon>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field required>
              <Form.Input
                fluid
                name='firstName'
                label='First name'
                placeholder='First name'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Input
              fluid
              name='lastName'
              label='Last name'
              placeholder='Last name'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Field>
            <Form.Input
              fluid
              name='email'
              type='email'
              label='Email'
              placeholder='Email'
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              name='dateOfArrival'
              type='date'
              label='Date of arrival'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Button
            positive
            onClick={this.submit}
            type='submit'
          >Submit
          </Form.Button>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = ({ modalState }) => {
  return {
    modalStatus: modalState.modalState
  };
};

export default connect(mapStateToProps, { hideCreateMentorModal })(NewMentor);
