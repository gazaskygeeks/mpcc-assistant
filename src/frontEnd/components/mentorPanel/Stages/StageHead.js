import React, { Component } from 'react';
import SendEmail from '../sendEmail/SendEmail';
import PropTypes from 'prop-types';

class StageHead extends Component {
  render() {
    const { headTitle } = this.props;

    return (
      <div className='stage-header'>
        <div className='stage-top'>
          <i className='far fa-dot-circle fa-5x mr-5'></i>
          <h3 className='stage-title'>{headTitle}</h3>
        </div>
        <SendEmail />
      </div>
    );
  }
}

StageHead.propTypes = {
  headTitle: PropTypes.string
};
export default StageHead;
