import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AppContainer from '../../ui/containers/AppContainer';
import MainContainer from '../../ui/containers/MainContainer';

// pages
import SignupPage from '../../ui/pages/SignUpPage';
import LoginPage from '../../ui/pages/LoginPage';

export const renderRoutes = () => (
  <Router>
    <div>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route exact={true} path="/" component={AppContainer}/>
    </div>
  </Router>
);
