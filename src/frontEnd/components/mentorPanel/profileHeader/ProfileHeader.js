import React, { Component } from 'react';

class ProfileHeader extends Component {
  render() {
    const { first_name, last_name, email, date_of_arrival, date_of_departure, info } = this.props.mentorInfo;
    const { photo, job_title } = info;

    return (
      <div className='profile-info'>
        <img className='circle-img' src={`/${photo}`} alt={`${first_name} ${last_name}`}></img>
        <div className='space'></div>
        <div className='right-side'>
          <h2 className='name-feild'>{`${first_name} ${last_name}`}</h2>
          <div className='ui inverted divider'></div>
          <h3 className='job-title info-feild'>{job_title}</h3>
          <h4 className='email info-feild'>Email: {email}</h4>
          <h4 className='date-of-arrival info-feild'>Entry Date: {date_of_arrival}</h4>
          <h4 className='date-of-arrival info-feild'>Departure Date: {date_of_departure}</h4>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
