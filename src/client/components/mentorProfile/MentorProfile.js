import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Message } from 'semantic-ui-react';
import Info from './info';
import ProfileHeader from '../mentorPanel/profileHeader/ProfileHeader';

import './mentorProfile.css';

class MentorProfile extends Component {
  componentDidMount() {
    const { getCurrentMentor, match } = this.props;
    const { mentorID } = match.params;
    getCurrentMentor(mentorID);
  }
  render() {
    const { currentMentor, isFetching } = this.props;
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
        <div className='mentorProfile__main'>
          <div className='mentorProfile__container'>
            <ProfileHeader mentorInfo={currentMentor} />
            <div className='mentorProfile__stages-container'>
              <div className='mentorProfile__stage-holder'>
                <Info mentorID={currentMentor.id}
                  editableTitle='Name:'
                  defaultContent={currentMentor.first_name} />
                <Info mentorID={currentMentor.id}
                  editableTitle={'Mother\'s Name:'}
                  defaultContent={currentMentor.info.mother_name} />
                <Info mentorID={currentMentor.id}
                  editableTitle={'Father\'s Name:'}
                  defaultContent={currentMentor.info.father_name} />
                <Info mentorID={currentMentor.id}
                  editableTitle={'Grandfather\'s Name:'}
                  defaultContent={currentMentor.info.grandfather_name} />
                <Info mentorID={currentMentor.id}
                  editableTitle='Surname:'
                  defaultContent={currentMentor.last_name} />
                <Info mentorID={currentMentor.id}
                  editableTitle='Nationality:'
                  defaultContent={currentMentor.info.nationality} />
                <Info mentorID={currentMentor.id}
                  editableTitle='Place Of Birth:'
                  defaultContent={currentMentor.info.place_of_birth} />
                <Info mentorID={currentMentor.id}
                  editableTitle='current Address:'
                  defaultContent={currentMentor.info.current_address} />
                <Info mentorID={currentMentor.id}
                  editableTitle='Permanent Address:'
                  defaultContent={currentMentor.info.permanent_address} />
                <Info mentorID={currentMentor.id}
                  editableTitle='Home Phone Number:'
                  defaultContent={currentMentor.info.home_phone_number} />
                <Info mentorID={currentMentor.id}
                  editableTitle= 'Mobile Phone:'
                  defaultContent={currentMentor.info.mobile_phone} />
                <Info mentorID={currentMentor.id}
                  editableTitle='Email Address:'
                  defaultContent={currentMentor.info.email_address} />
                <Info mentorID={currentMentor.id}
                  editableTitle='Job Title / Profession:'
                  defaultContent={currentMentor.info.job_title} />
                <Info mentorID={currentMentor.id}
                  editableTitle='Previous Nationality:'
                  defaultContent={currentMentor.info.previous_nationality} />
                <Info mentorID={currentMentor.id}
                  editableTitle='Marital Status:'
                  defaultContent={currentMentor.info.marital_status} />
                <Info mentorID={currentMentor.id}
                  editableTitle='LinkedIn URL:'
                  defaultContent={currentMentor.info.linkedIn_url} />
                <Info mentorID={currentMentor.id}
                  editableTitle='Bio:'
                  defaultContent={currentMentor.info.bio} />
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
  };
};

MentorProfile.propTypes = {
  isFetching: PropTypes.bool,
  match: PropTypes.object,
  currentMentor: PropTypes.object,
  getCurrentMentor: PropTypes.func
};
export default MentorProfile;
