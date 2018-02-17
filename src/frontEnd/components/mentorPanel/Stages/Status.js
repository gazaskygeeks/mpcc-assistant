import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Status extends Component {
  render() {
    const { statusTitle, statusValue } = this.props;

    return (
      <div className='stage-box'>
        <div className='head-box'>
          <div className='stage-top'>
            <i className='fa fa-circle mr-5'></i>
            <h3 className='sub-title fs-18'>{statusTitle}</h3>
          </div>
          <p className='ml-5 para'>
            {
              statusValue?
                <i className='fas fa-check-circle fa-1x success-msg ml-5'></i>
                :
                <i className='fas fa-times-circle fa-1x error-msg ml-5'></i>
            }
          </p>
        </div>
      </div>
    );
  }
}

Status.propTypes = {
  statusTitle: PropTypes.string,
  statusValue: PropTypes.bool
};

export default Status;
