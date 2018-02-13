import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';
import MentorPanel from '../containers/MentorPanel';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/' component={Login} />
            <Route exact path='/dashboard/panel/:id' component={MentorPanel} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
