import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Login from '../containers/Login';
import Waiver from '../containers/Waiver';
import Dashboard from '../containers/Dashboard';
import FlightInfo from '../containers/FlightInfo';
import MentorForm from '../containers/MentorForm';
import MentorPanel from '../containers/MentorPanel';
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
          <Navbar />
          <HostNewMentorModal/>
          <UpdateMentorModal/>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/submit/waiver' component={Waiver} />
            <Route exact path='/submit/offer-picture' component={PersonalPicture} />
            <Route exact path='/submit/flight-info' component={FlightInfo} />
            <Route exact path='/submit/forms/:formID/:mentorID' component={MentorForm} />
            <Route exact path='/mc/submit/permit-approval/:mentorID' component={PermitApproval} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/dashboard/panel/:id' component={MentorPanel} />
            <Route exact path='/dashboard/mc/permission-approval/:mentorID'
              component={PermissionApproval} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
