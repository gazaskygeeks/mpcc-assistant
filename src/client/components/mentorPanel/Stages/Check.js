import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Check extends Component {
  constructor() {
    super();
    this._postCheck = this._postCheck.bind(this);
  }

  _postCheck() {
    const { postCheck, docType, mentorID } = this.props;
    postCheck(docType, mentorID);
  }

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
                  <Button className='ml-5 small bg-red mt-0x'
                    size='small'
                    onClick={this._postCheck}>
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
  checkStatus: PropTypes.bool,
  docType: PropTypes.string,
  mentorID: PropTypes.number,
  postCheck: PropTypes.func
};
export default Check;
