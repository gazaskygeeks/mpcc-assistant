import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ParaLink extends Component {
  render() {
    const { editableTitle, mentorID } = this.props;

    return (
      <div className='stage-box'>
        <div className='editable__left'>
          <hr /> <i className='fa fa-circle small-circle'></i>
        </div>
        <div className='editable__right ParaLink__er'>
          <div className='head-box'>
            <div className='ParaLink__stage-top'>
              <h3 className='sub-title'>{editableTitle}</h3>
              <a
                target='_blank'
                href={`/mc/submit/permission-approval/${mentorID}`}>
                View
              </a>
              <Button className='ml-5 small bg-red' size='small'>
                Copy
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ParaLink.propTypes = {
  editableTitle: PropTypes.string,
  mentorID: PropTypes.number
};
export default ParaLink;
