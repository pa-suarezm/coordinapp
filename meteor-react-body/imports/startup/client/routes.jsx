import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AppContainer from '../../ui/containers/AppContainer.jsx'

// pages
import SignupPage from '../../ui/pages/SignUpPage.jsx'
import LoginPage from '../../ui/pages/LoginPage.jsx'

export const renderRoutes = () => (
  <Router>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route exact={true} path="/" component={AppContainer}/>
  </Router>
);
