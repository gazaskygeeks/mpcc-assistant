import React, { Component } from 'react';
import { Button, Modal, Form, Header, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Editable extends Component {

  render() {
    const { editableTitle, defaultContent } = this.props;

    return (
      <div className='stage-box'>
        <div className='head-box'>
          <div className='stage-top'>
            <i className='fa fa-circle mr-5'></i>
            <h3 className='sub-title fs-18'>{editableTitle}</h3>
          </div>
          <Modal trigger={
            <Button className='ml-5 small bg-red' size='small'>
            Edit</Button>
          }>
            <Modal.Header>Edit:</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>{editableTitle}</Header>
                <Form className='se-f'>
                  <Form.Group className='se-gf'>
                    <Form.TextArea fluid defaultValue={defaultContent} />
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
        </div>
        <div className='ml-5 sticky-divider'></div>
        <p className='ml-5 para'>{defaultContent}</p>
      </div>
    );
  }
}

Editable.propTypes = {
  editableTitle: PropTypes.string,
  defaultContent: PropTypes.string
};
export default Editable;
