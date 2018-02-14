import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Dashboard from '../containers/Dashboard';
import HostNewMentorModal from './hostMentor/hostNewMentorModal';
import UpdateMentorModal from './hostMentor/hostExistingMentorModal';
import Login from '../containers/Login';
import Waiver from '../containers/Waiver';
import FlightInfo from '../containers/FlightInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <HostNewMentorModal/>
          <UpdateMentorModal/>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/waiver' component={Waiver} />
            <Route path='/submit/flight-info' component={FlightInfo} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
