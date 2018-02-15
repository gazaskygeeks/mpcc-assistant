import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class SendEmail extends Component {
  render() {
    const { emailType, to, cc, bcc, subject, content } = this.props;
    return (
      <Modal trigger={ <Button className='ml-5 large' size='small'>
      Send Email</Button>
      }>
        <Modal.Header>Send Email:</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>{emailType}</Header>
            <Form className='se-f'>
              <Form.Group className='se-gf'>
                <Form.Input fluid label='To:' placeholder='Mentor Email' className='se-gf'
                  defaultValue={to}/>
                <Form.Input fluid label='CC' placeholder='CC Contacts' className='se-gf'
                  defaultValue={cc}/>
                <Form.Input fluid label='BCC' placeholder='BCC Contacts' className='se-gf'
                  defaultValue={bcc}/>
                <Form.Input fluid label='Subject' placeholder='Email Subject' className='se-gf'
                  defaultValue={subject}/>
                <Form.TextArea fluid label='Message' placeholder='Email Message'
                  className='m-h500x se-gf'
                  defaultValue={content}/>
              </Form.Group>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Submit Email <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

SendEmail.propTypes = {
  emailType: PropTypes.string,
  to: PropTypes.string,
  cc: PropTypes.string,
  bcc: PropTypes.string,
  subject: PropTypes.string,
  content: PropTypes.string
};

export default SendEmail;
