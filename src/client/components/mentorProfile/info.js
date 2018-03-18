import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Info extends Component {
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
  defaultContent: PropTypes.string

};
export default Info;
