import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Check extends Component {
  render() {
    const { checkTitle, checkStatus } = this.props;

    return (
      <div className='stage-box'>
        <div className='head-box'>
          <div className='stage-top'>
            <i className='fa fa-circle mr-5'></i>
            <h3 className='sub-title'>{'checkTitle'}</h3>
          </div>
          <Button className='ml-5 small bg-red' size='small'>
          Check</Button>
        </div>
      </div>
    );
  }
}

export default Check;
