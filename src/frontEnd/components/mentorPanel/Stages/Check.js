import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Check extends Component {
  render() {
    const { checkTitle, checkStatus } = this.props;

    return (
      <div className='stage-box'>
        <div className='head-box'>
          <div className='stage-top'>
            <i className='fa fa-circle mr-5'></i>
            <h3 className='sub-title'>{checkTitle}: <h5>{checkStatus? ' CHECKED':' NOT CHECKED'}</h5></h3>
          </div>
          <Button className='ml-5 small bg-red' size='small'>
          Check</Button>
        </div>
      </div>
    );
  }
}

Check.propTypes = {
  checkTitle: PropTypes.string,
  checkStatus: PropTypes.bool
};
export default Check;
