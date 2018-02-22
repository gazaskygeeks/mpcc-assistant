import React, { Component } from 'react';
import { Button, Modal, Form, Header, Icon, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Editable extends Component {
  constructor() {
    super();
    this._handleInputChange = this._handleInputChange.bind(this);
    this._postField = this._postField.bind(this);
  }

  _handleInputChange(e, { name, value }) {
    const { handleInputChange } = this.props;
    handleInputChange(name, value);
  }

  _postField() {
    const { fieldType, fieldValue, postField, mentorID } = this.props;
    postField(fieldType.replace(/:/g, ''), fieldValue, mentorID);
  }

  render() {
    const { editableTitle, defaultContent, postFieldResponse, error } = this.props;
    const fieldType = editableTitle.toLowerCase().replace(/ /g, '_');

    return (
      <div className='stage-box'>
        <div className='editable__left'>
          <hr /> <i className='fa fa-circle small-circle'></i>
        </div>
        <div className='editable__right'>
          <div className='head-box'>
            <div className='stage-top'>
              <h3 className='sub-title'>{editableTitle}</h3>
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
                      <Form.TextArea fluid
                        name={fieldType}
                        defaultValue={defaultContent}
                        onChange={this._handleInputChange} />
                    </Form.Group>
                  </Form>
                </Modal.Description>
                {postFieldResponse.id && (
                  <div className='success-msg'>
                    <span>Updated Successfully</span>
                  </div>
                )}
                {error.length > 1 && (
                  <div className='err-msg'>
                    <span>Updated Failed!
                    {error}
                    </span>
                  </div>
                )}
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={this._postField}
                  primary className='mt-0x'>
                  Submit <Icon name='right chevron' />
                </Button>
              </Modal.Actions>
            </Modal>
          </div>
          <Container className='no-pad' fluid>
            <p className='para'>{defaultContent}</p>
          </Container>
          <div className='sticky-divider'></div>
        </div>
      </div>
    );
  }
}

Editable.propTypes = {
  editableTitle: PropTypes.string,
  defaultContent: PropTypes.string,
  handleInputChange: PropTypes.func,
  fieldType: PropTypes.string,
  fieldValue: PropTypes.string,
  postField: PropTypes.func,
  mentorID: PropTypes.number,
  isFetching: PropTypes.bool,
  postFieldResponse: PropTypes.object,
  error: PropTypes.string
};
export default Editable;
