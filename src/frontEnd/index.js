import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import configureStore from './store.js';

import Dashboard from './components/dashboard/dashboard';

// const store = configureStore();

ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
    <div className='app' style={{ width: '100%' }}>
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  </BrowserRouter>
  // </Provider>
  , document.getElementById('root')
);
