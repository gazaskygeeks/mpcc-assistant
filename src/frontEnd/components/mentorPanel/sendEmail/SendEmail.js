import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class SendEmail extends Component {
  constructor() {
    super();
    this._handleInputChange = this._handleInputChange.bind(this);
    this.replaceVars = this.replaceVars.bind(this);
    this._postEmail = this._postEmail.bind(this);
  }
  replaceVars(value) {
    // not Working? any idea why??
    const { mentorInfo } = this.props;
    value.replace(/#mentor_name#/gi, `${mentorInfo.first_name} ${mentorInfo.last_name}`);
    value.replace(/#mentor_email#/gi, mentorInfo.email);
    return value;
  }

  _handleInputChange(e, { name, value }) {
    const { handleInputChange } = this.props;
    handleInputChange(name, value);
  }
  _postEmail() {
    const { email, mentorInfo, postEmail } = this.props;
    const emailType = email.type;
    const mentorID = mentorInfo.id;
    const emailDetails = {
      ...email,
      to: this.props.to,
      cc: this.props.cc,
      bcc: this.props.bcc
    };
    postEmail(emailDetails, emailType, mentorID);
  }

  render() {
    const { email, to, cc, bcc, error, sendEmailResponse } = this.props;
    const { emailTitle, subject, content } = email;

    return (
      <Modal trigger={ <Button className='ml-5 large' size='small'>
      Send Email</Button>
      }>
        <Modal.Header>Send Email:</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>{emailTitle}</Header>
            <Form className='se-f'>
              <Form.Group className='se-gf'>
                <Form.Input fluid label='To:' placeholder='Mentor Email' className='se-gf'
                  defaultValue={to} name='to'
                  onChange={this._handleInputChange}/>
                <Form.Input fluid label='CC' placeholder='CC Contacts' className='se-gf'
                  defaultValue={cc} name='cc'
                  onChange={this._handleInputChange}/>
                <Form.Input fluid label='BCC' placeholder='BCC Contacts' className='se-gf'
                  defaultValue={bcc} name='bcc'
                  onChange={this._handleInputChange}/>
                <Form.Input fluid label='Subject' placeholder='Email Subject' className='se-gf'
                  defaultValue={this.replaceVars(subject)} name='subject'
                  onChange={this._handleInputChange}/>
                <Form.TextArea fluid label='Message' placeholder='Email Message'
                  className='m-span00x se-gf'
                  defaultValue={this.replaceVars(content)} name='content'
                  onChange={this._handleInputChange}/>
              </Form.Group>
            </Form>
          </Modal.Description>
          {error.length > 1 &&
            <div className='err-msg'>
              <span>{error}</span>
            </div>
          }
          {sendEmailResponse.length > 1 &&
            <div className='success-msg'>
              <span>{sendEmailResponse}</span>
            </div>
          }
        </Modal.Content>
        <Modal.Actions>
          <Button primary
            onClick={this._postEmail}>
            Submit Email <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

SendEmail.propTypes = {
  email: PropTypes.object,
  mentorID: PropTypes.number,
  emailType: PropTypes.string,
  to: PropTypes.string,
  cc: PropTypes.string,
  bcc: PropTypes.string,
  subject: PropTypes.string,
  content: PropTypes.string,
  mentorInfo: PropTypes.object,
  replaceVars: PropTypes.func,
  postEmail: PropTypes.func,
  handleInputChange: PropTypes.func,
  error: PropTypes.string,
  sendEmailResponse: PropTypes.string
};

export default SendEmail;
