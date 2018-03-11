import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Dashboard from '../containers/Dashboard';
import HostNewMentorModal from './hostMentor/hostNewMentorModal';
import UpdateMentorModal from './hostMentor/hostExistingMentorModal';
import Login from '../containers/Login';
import Waiver from '../containers/Waiver';
import MentorPanel from '../containers/MentorPanel';
import FlightInfo from '../containers/FlightInfo';
import Notifications from './notifications/notifications.js';

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
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/dashboard/panel/:id' component={MentorPanel} />
            <Route exact path='/submit/waiver' component={Waiver} />
            <Route exact path='/submit/flight-info' component={FlightInfo} />
            <Route exact path='/dashboard/notifications' component={Notifications} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
