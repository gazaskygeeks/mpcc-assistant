import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Editable extends Component {
  render() {
    const { paraTitle, defaultContent } = this.props;

    return (
      <div className='stage-box'>
        <div className='editable__left'>
          <hr /> <i className='fa fa-circle small-circle'></i>
        </div>
        <div className='editable__right'>
          <div className='head-box'>
            <div className='stage-top'>
              <h3 className='sub-title'>{paraTitle}</h3>
            </div>
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
  paraTitle: PropTypes.string,
  defaultContent: PropTypes.string
};
export default Editable;
