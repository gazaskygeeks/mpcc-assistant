import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Check extends Component {
  render() {
    const { checkTitle, checkStatus } = this.props;

    return (
      <div className='stage-box'>
        <div className='editable__left'>
          <hr /> <i className='fa fa-circle small-circle'></i>
        </div>
        <div className='editable__right'>
          <div className='head-box'>
            <div className='stage-top'>
              <h3 className='sub-title'>{checkTitle}</h3>
            </div>
            <p className='ml-5 para'>{
              checkStatus?
                <i className='fas fa-check-circle fa-1x success-msg ml-5'></i>
                :
                <span className='head-box'>
                  <i className='fas fa-times-circle fa-1x error-msg ml-5'></i>
                  <Button className='ml-5 small bg-red mt-0x' size='small'>
                Check</Button>
                </span>
            }</p>
          </div>
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
