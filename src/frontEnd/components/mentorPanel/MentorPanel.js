import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './mentorPanel.css';
import ProfileHeader from './profileHeader/ProfileHeader';
import { StageHead, Editable, Status, Check } from './Stages';
import { Icon, Message } from 'semantic-ui-react';

class MentorPanel extends Component {
  componentDidMount() {
    const { getCurrentMentor, match } = this.props;
    const mentorID = match.params.id;
    getCurrentMentor(mentorID);
  }
  render() {
    const { currentMentor, isFetching } = this.props;
    console.log(currentMentor);
    // const {
    //   first_name,
    //   last_name,
    //   email,
    //   date_of_arrival,
    //   date_of_departure,
    //   info
    // } = this.props.currentMentor;
    // const {
    //   bio,
    //   purpose_of_visit,
    //   photo,
    //   permission_email_status,
    //   permit_request_status,
    //   checklist_form_status,
    //   signed_waiver_status,
    //   fligh_information_status,
    //   mentor_schedule_status,
    //   permit_approval_status,
    //   permit_number,
    //   book_hotel_status,
    //   schedule_inform_status,
    //   schedule_approval_status,
    //   schedule_to_google_status,
    //   whatsapp_group_status,
    //   share_final_files_status,
    //   thanks_email
    // } = info;

    return (
      <div>
        {isFetching && (
          <Message icon>
            <Icon name='circle notched' loading />
            <Message.Content>
              <Message.Header>Just one second</Message.Header>
              We are fetching that content for you.
            </Message.Content>
          </Message>
        )}
        {currentMentor.id &&
          (
            <div className='container'>
              <ProfileHeader mentorInfo={currentMentor}/>
              <div className='horizontal-divider'></div>
              <div className='stages-container'>
                <div className='stage-holder'>
                  <StageHead headTitle='Permit Email:' />
                  <Editable editableTitle='Bio:' defaultContent='{bio}'/>
                  <Editable editableTitle='Purpose Of Visit:' defaultContent='{purpose_of_visit}'/>
                </div>
                <div className='stage-holder'>
                  <StageHead headTitle='Permission Email:' />
                  <Status statusTitle='Permission Status:' statusValue='{permission_email_status}'/>
                </div>
                <div className='stage-holder'>
                  <StageHead headTitle='Permit Request Email:' />
                  <Status statusTitle='Request Status:' statusValue='{permit_request_status}'/>
                </div>
                <div className='stage-holder'>
                  <StageHead headTitle='Checklist Email:' />
                  <Status statusTitle='Checklist Status:' statusValue='{checklist_form_status}'/>
                  <Status statusTitle='Signed Waiver Status:' statusValue='{signed_waiver_status}'/>
                  <Status statusTitle='Flight Information Status:' statusValue='{fligh_information_status}'/>
                </div>
                <div className='stage-holder'>
                  <StageHead headTitle='Scheduling:' />
                  <Status statusTitle='Mentor Schedulte Build:' statusValue='{mentor_schedule_status}'/>
                </div>
                <div className='stage-holder'>
                  <StageHead headTitle='Permit Approval:' />
                  <Status statusTitle='Approval Status:' statusValue='{permit_approval_status}'/>
                  <Status statusTitle='Permission Status:' statusValue='{permit_number}'/>
                </div>
                <div className='stage-holder'>
                  <StageHead headTitle='Book Hotel:' />
                  <Status statusTitle='Booking Status:' statusValue='{book_hotel_status}'/>
                </div>
                <div className='stage-holder'>
                  <StageHead headTitle='Inform Mentor:' />
                  <Status statusTitle='Informed:' statusValue='{schedule_inform_status}'/>
                  <Status statusTitle='Approval Status:' statusValue='{schedule_approval_status}'/>
                </div>
                <div className='stage-holder'>
                  <StageHead headTitle='Transfer Schedule:' />
                  <Check checkTitle='Schduled on Google Calender' checkStatus='{schedule_to_google_status}'/>
                </div>
                <div className='stage-holder'>
                  <StageHead headTitle='Whatsapp Group:' />
                  <Check checkTitle='Whatsapp Group Created' checkStatus='{whatsapp_group_status}'/>
                </div>
                <div className='stage-holder'>
                  <StageHead headTitle='Share Final Files:' />
                  <Check checkTitle='Files Share Completed' checkStatus='{share_final_files_status}'/>
                </div>
                <div className='stage-holder'>
                  <StageHead headTitle='Thanks Email:' />
                  <Status statusTitle='Sent' statusValue='{thanks_email}'/>
                </div>
              </div>
            </div>
          )
        }
        {!isFetching && !currentMentor.id && (
          <Message color='red'>Mentor Was Not Found</Message>
        )}
      </div>

    );
  }
}

MentorPanel.propTypes = {
  match: PropTypes.object,
  currentMentor: PropTypes.object,
  isFetching: PropTypes.bool
};

export default MentorPanel;
