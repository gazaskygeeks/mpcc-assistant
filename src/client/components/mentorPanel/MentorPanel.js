import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileHeader from './profileHeader/ProfileHeader';
import { StageHead, Status } from './Stages';
import { Icon, Message } from 'semantic-ui-react';
import Editable from '../../containers/Editable';
import Check from '../../containers/Check';

import './mentorPanel.css';

class MentorPanel extends Component {
  componentDidMount() {
    const { getCurrentMentor, getEmails, match } = this.props;
    const mentorID = match.params.id;
    getCurrentMentor(mentorID);
    getEmails();
  }

  render() {
    const { currentMentor, emails, isFetching } = this.props;
    let content = '';
    if (isFetching) {
      content = (<Message icon>
        <Icon name='circle notched' loading />
        <Message.Content>
          <Message.Header>Just one second</Message.Header>
          We are fetching that content for you.
        </Message.Content>
      </Message>);
    } else if (!isFetching && !currentMentor.id) {
      content = (<Message color='red'>Mentor Was Not Found</Message>);
    } else {
      content = (
        <div className='mentorPanel__main'>
          <div className='mentorPanel__left'>
          </div>
          <div className='mentorPanel__container'>
            <ProfileHeader
              mentorInfo={currentMentor}
            />
            <div className='stages-container'>
              <div className='stage-holder'>
                <StageHead email={emails.permitEmail}
                  mentorInfo={currentMentor}
                  headTitle='Permit Email:' />
                <Editable mentorID={currentMentor.id}
                  editableTitle='Bio:'
                  defaultContent={currentMentor.info.bio} />
                <Editable mentorID={currentMentor.id}
                  editableTitle='Purpose Of Visit:'
                  defaultContent={currentMentor.info.purpose_of_visit} />
              </div>
              <div className='stage-holder'>
                <StageHead email={emails.permissionEmail}
                  mentorInfo={currentMentor}
                  headTitle='Permission Email:' />
                <Status
                  statusTitle='Permission Status:'
                  statusValue={currentMentor.info.permission_email_status}/>
              </div>
              <div className='stage-holder'>
                <StageHead email={emails.permitRequestEmail}
                  mentorInfo={currentMentor}
                  headTitle='Permit Request Email:' />
                <Status
                  statusTitle='Request Status:'
                  statusValue={currentMentor.info.permit_request_status}/>
              </div>
              <div className='stage-holder'>
                <StageHead email={emails.checkListEmail}
                  mentorInfo={currentMentor}
                  headTitle='Checklist Email:' />
                <Status
                  statusTitle='Checklist Status:'
                  statusValue={currentMentor.info.checklist_form_status}/>
                <Status
                  statusTitle='Signed Waiver Status:'
                  statusValue={currentMentor.info.signed_waiver_status}/>
                <Status
                  statusTitle='Flight Information Status:'
                  statusValue={currentMentor.info.fligh_information_status}/>
              </div>
              <div className='stage-holder'>
                <StageHead email={emails.scheduling}
                  mentorInfo={currentMentor}
                  headTitle='Scheduling:' />
                <Status
                  statusTitle='Mentor Schedule Build:'
                  statusValue={currentMentor.info.mentor_schedule_status}/>
              </div>
              <div className='stage-holder'>
                <StageHead headTitle='Permit Approval:' />
                <Status
                  statusTitle='Approval Status:'
                  statusValue={currentMentor.info.permit_approval_status}/>
                <Status
                  statusTitle='Permission Status:'
                  statusValue={currentMentor.info.permit_number}/>
              </div>
              <div className='stage-holder'>
                <StageHead headTitle='Book Hotel:' />
                <Status
                  statusTitle='Booking Status:'
                  statusValue={currentMentor.info.book_hotel_status}/>
              </div>
              <div className='stage-holder'>
                <StageHead headTitle='Inform Mentor:' />
                <Status
                  statusTitle='Informed:'
                  statusValue={currentMentor.info.schedule_inform_status}/>
                <Status
                  statusTitle='Approval Status:'
                  statusValue={currentMentor.info.schedule_approval_status}/>
              </div>
              <div className='stage-holder'>
                <StageHead headTitle='Transfer Schedule:' />
                <Check
                  checkTitle='Google Calender Status:'
                  checkStatus={currentMentor.info.schedule_to_google_status}
                  mentorID={currentMentor.id}
                  docType='schedule_to_google_status' />
              </div>
              <div className='stage-holder'>
                <StageHead headTitle='Whatsapp Group:' />
                <Check
                  checkTitle='Whatsapp Group Created:'
                  checkStatus={currentMentor.info.whatsapp_group_status}
                  mentorID={currentMentor.id}
                  docType='whatsapp_group_status' />
              </div>
              <div className='stage-holder'>
                <StageHead headTitle='Share Final Files:' />
                <Check
                  checkTitle='Files Share Completed:'
                  checkStatus={currentMentor.info.share_final_files_status}
                  mentorID={currentMentor.id}
                  docType='share_final_files_status' />
              </div>
              <div className='stage-holder'>
                <StageHead headTitle='Thanks Email:' />
                <Status
                  statusTitle='Thanks Email Status:'
                  statusValue={currentMentor.info.thanks_email} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {content}
      </div>

    );
  }
}

MentorPanel.propTypes = {
  match: PropTypes.object,
  currentMentor: PropTypes.object,
  isFetching: PropTypes.bool,
  getCurrentMentor: PropTypes.func,
  getEmails: PropTypes.func,
  emails: PropTypes.object
};

export default MentorPanel;
