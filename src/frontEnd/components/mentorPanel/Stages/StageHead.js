import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import SendEmail from '../sendEmail/SendEmail';

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

export default StageHead;
