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
import coordinator from "../../ui/components/Coordinator";
import student from "../../ui/components/Student";
import estimate from "../../ui/components/Estimate";
import courses from "../../ui/components/Courses";
import courseDetail from "../../ui/components/CourseDetail";

//Static sidenav
import SideNav from "../../ui/components/SideNav";

export const renderRoutes = () => (
  <div className="app-container">
    <SideNav />
    <Router>
      <div className="whole-background">
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
