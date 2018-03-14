import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Info extends Component {
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
    const { editableTitle, defaultContent } = this.props;

    return (
      <div className='info__stage-box'>
        <div className='info__editable__left'>
          <hr /> <i className='fa fa-circle small-circle'></i>
        </div>
        <div className='info__editable__right'>
          <div className='info__head-box'>
            <div className='info__stage-top'>
              <h3 className='info__sub-title'>{editableTitle}</h3>
            </div>
            <Container className='info__no-pad' fluid>
              <p className='info__para'>{defaultContent}</p>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

Info.propTypes = {
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
export default Info;
