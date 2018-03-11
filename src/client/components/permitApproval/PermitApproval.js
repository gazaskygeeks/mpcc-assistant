import React, { Component } from 'react';
import { Button, Form, Input, Radio } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './permitApproval.css';

class PermitApproval extends Component {

  constructor() {
    super();
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInputChange(e, { name, value }) {
    const { handleInputChange } = this.props;
    handleInputChange(name, value);
  }

  _handleSubmit() {
    const { _permit_approval_status,_permit_number, postPermitApproval, match } = this.props;
    const { mentorID } = match.params;
    postPermitApproval(_permit_approval_status,_permit_number, mentorID);
  }

  render() {
    const { permitApprovalResult, error, _permit_approval_status } = this.props;

    return (
      <Form className='form-permit'>
        <Form.Group grouped>
          <label>Permit Approval:</label>
          <Form.Field control={Radio} label='Approved' value={true}
            checked={_permit_approval_status===true}
            name='_permit_approval_status' onChange={this._handleInputChange} />
          <Form.Field control={Radio} label='Declined' value={false}
            checked={_permit_approval_status===false}
            name='_permit_approval_status' onChange={this._handleInputChange} />
        </Form.Group>
        <label htmlFor='permitNumber'>Permit Number:</label>
        <Form.Field control={Input} id='permitNumber'
          name='_permit_number' onChange={this._handleInputChange} />
        <Form.Field control={Button} onClick={this._handleSubmit}>Submit</Form.Field>
        { error &&
          <div className='err-msg'>
            <span>{error.message}</span>
          </div>
        }
        { permitApprovalResult.status &&
          <div className='success-msg'>
            <span>{permitApprovalResult.msg}</span>
          </div>
        }
      </Form>
    );
  }
}

PermitApproval.propTypes = {
  handleInputChange: PropTypes.func,
  _permit_approval_status: PropTypes.bool,
  _permit_number: PropTypes.string,
  postPermitApproval: PropTypes.func,
  match: PropTypes.object,
  error: PropTypes.object,
  permitApprovalResult: PropTypes.object
};

export default PermitApproval;
