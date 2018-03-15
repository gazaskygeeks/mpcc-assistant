import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Card, Image, Message, Icon } from 'semantic-ui-react';

import './permissionApproval.css';
class PermissionApproval extends Component {
  constructor() {
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  componentDidMount() {
    const { match, getCurrentMentor } = this.props;
    const { mentorID } = match.params;
    getCurrentMentor(mentorID);
  }
  _handleSubmit(event) {
    const { postPermissionApproval, match } = this.props;
    const { mentorID } = match.params;
    const _permission_approval_status = event.target.value;
    postPermissionApproval(_permission_approval_status, mentorID);
  }

  render() {
    const { currentMentor, isFetching, permissionApprovalResult } = this.props;

    console.log(permissionApprovalResult);
    let content = '';
    if (isFetching) {
      content=(
        <div className='card-style'>
          <Card>
            <Card.Content>
              <Message icon>
                <Icon name='circle notched' loading />
                <Message.Content>
                  <Message.Header>Just one second</Message.Header>
                  We are fetching that content for you.
                </Message.Content>
              </Message>
            </Card.Content>
          </Card>
        </div>
      );
    } else if (permissionApprovalResult.status) {
      content = (
        <div className='card-style'>
          <Card>
            <Card.Content>
              <Message icon>
                <Message.Content>
                  <Message.Header>Thanks!</Message.Header>
                </Message.Content>
              </Message>
            </Card.Content>
          </Card>
        </div>
      );
    } else if (currentMentor.info) {
      content = (
        <div className='card-style'>
          <Card className='uicard'>
            <Card.Content className='cardContent'>
              <Image floated='right' size='mini' className='cardImage'
                src={currentMentor.info.photo} circular />
              <Card.Header className='cardHeader'>
                {`${currentMentor.first_name} ${currentMentor.last_name}`}
              </Card.Header>
              <Card.Meta>
                {currentMentor.info.job_title}
              </Card.Meta>
              <Card.Description>
                <h3>Bio:</h3>
                <p>{currentMentor.info.bio}</p>
                <h3>Purpose Of Visit:</h3>
                <p>{currentMentor.info.purpose_of_visit}</p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons cardButtons'>
                <Button basic color='green' name='_permission_approval_status'
                  value={true}
                  onClick={this._handleSubmit.bind(this)}>Approve</Button>
                <Button basic color='red' name='_permission_approval_status'
                  value={false}
                  onClick={this._handleSubmit.bind(this)}>Decline</Button>
              </div>
            </Card.Content>
          </Card>
        </div>
      );
    }
    return (
      <div>{content}</div>
    );
  }
}

PermissionApproval.propTypes = {
  handleInputChange: PropTypes.func,
  isFetching: PropTypes.bool,
  getCurrentMentor: PropTypes.func,
  match: PropTypes.object,
  currentMentor: PropTypes.object,
  postPermissionApproval: PropTypes.func,
  _permission_approval_status: PropTypes.bool,
  permissionApprovalResult: PropTypes.object
};

export default PermissionApproval;
