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
            <h3 className='sub-title'>{statusTitle}</h3>
          </div>
        </div>
        <div className='ml-5 sticky-divider'></div>
        <p className='ml-5 para'>{statusValue? 'PASS':'FAIL'}</p>
      </div>
    );
  }
}

Status.propTypes = {
  statusTitle: PropTypes.string,
  statusValue: PropTypes.bool
};

export default Status;
