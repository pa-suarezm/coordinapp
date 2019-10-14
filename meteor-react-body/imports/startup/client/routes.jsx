import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container, Col, Row } from "react-bootstrap";
// containers
import AppContainer from "../../ui/containers/AppContainer";
import MainContainer from "../../ui/containers/MainContainer";

// pages
import SignupPage from "../../ui/pages/SignUpPage";
import LoginPage from "../../ui/pages/LoginPage";

//Components
import coordinator from "../../ui/Coordinator";
import student from "../../ui/Student";
import estimate from "../../ui/Estimate";
import courses from "../../ui/Courses";
import courseDetail from "../../ui/CourseDetail";

//Static sidenav
import SideNav from "../../ui/components/SideNav";

export const renderRoutes = () => (
  <div className="app-container">
    <SideNav />
    <Router>
      <div>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/Coordinator" component={coordinator} exact />
        <Route path="/Estimate" component={estimate} exact />
        <Route path="/Student" component={student} exact />
        <Route path="/Courses" component={courses} exact />
        <Route path="/Courses/:id" component={courseDetail} exact />
        <Route exact={true} path="/" component={AppContainer} />
      </div>
    </Router>
  </div>
);
