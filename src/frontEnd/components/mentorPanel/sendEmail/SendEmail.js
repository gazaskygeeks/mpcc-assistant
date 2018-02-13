import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';

class SendEmail extends Component {
  render() {
    return (
      <Modal trigger={ <Button className='ml-5 large' size='small'>
      Send Email</Button>
      }>
        <Modal.Header>Send Email:</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Permit Email</Header>
            <Form className='se-f'>
              <Form.Group className='se-gf'>
                <Form.Input fluid label='To:' placeholder='Mentor Email' className='se-gf' />
                <Form.Input fluid label='CC' placeholder='CC Contacts' className='se-gf' />
                <Form.Input fluid label='BCC' placeholder='BCC Contacts' className='se-gf' />
                <Form.Input fluid label='Subject' placeholder='Email Subject' className='se-gf' />
                <Form.TextArea fluid label='Message' placeholder='Email Message' className='m-h500x se-gf' />
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

export default SendEmail;
