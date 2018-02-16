import React, { Component } from 'react';
import SendEmail from '../../../containers/SendEmail';
import PropTypes from 'prop-types';

class StageHead extends Component {
  render() {
    const { headTitle, email, mentorInfo } = this.props;

    return (
      <div className='stage-header'>
        <div className='stage-top'>
          <i className='far fa-dot-circle fa-5x mr-5'></i>
          <h3 className='stage-title'>{headTitle}</h3>
        </div>
        {email && (
          <SendEmail email={email} mentorInfo={mentorInfo}/>
        )}
      </div>
    );
  }
}

StageHead.propTypes = {
  headTitle: PropTypes.string,
  email: PropTypes.object,
  mentorInfo: PropTypes.object
};
export default StageHead;
