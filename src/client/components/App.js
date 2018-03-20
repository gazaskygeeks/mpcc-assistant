import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../containers/Navbar';
import Dashboard from '../containers/Dashboard';
import HostNewMentorModal from './hostMentor/hostNewMentorModal';
import UpdateMentorModal from './hostMentor/hostExistingMentorModal';
import Login from '../containers/Login';
import Waiver from '../containers/Waiver';
import Dashboard from '../containers/Dashboard';
import FlightInfo from '../containers/FlightInfo';
import Notifications from '../containers/Notifications';
import MentorForm from '../containers/MentorForm';
import MentorProfile from '../containers/mentorProfile';
import PermitApproval from '../containers/PermitApproval';
import HostNewMentorModal from './hostMentor/hostNewMentorModal';
import PermissionApproval from '../containers/PermissionApproval';
import UpdateMentorModal from './hostMentor/hostExistingMentorModal';
import PersonalPicture from '../containers/PersonalPicture';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route component={Navbar}/>
          <HostNewMentorModal/>
          <UpdateMentorModal/>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/dashboard/panel/:id' component={MentorPanel} />
            <Route exact path='/dashboard/notifications' component={Notifications} />
            <Route exact path='/profile/:mentorID' component={MentorProfile} />
            <Route exact path='/ms/submit/waiver' component={Waiver} />
            <Route exact path='/ms/submit/flight-info' component={FlightInfo} />
            <Route exact path='/ms/submit/forms/:formID/:mentorID' component={MentorForm} />
            <Route exact path='/mc/submit/permit-approval/:mentorID' component={PermitApproval} />
            <Route exact path='/mc/submit/permission-approval/:mentorID'
              component={PermissionApproval} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
