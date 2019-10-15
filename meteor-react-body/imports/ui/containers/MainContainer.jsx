import React, { Component } from "react";
import "../../../client/main.css";
import { Col } from "react-bootstrap";
import { withHistory } from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

//Components
import Coordinator from "../components/Coordinator";
import Student from "../components/Student";
import Estimate from "../components/Estimate";
import Courses from "../components/Courses";
import CourseDetail from "../components/CourseDetail";
import Welcome from "../components/Welcome"

class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.logout = this.props.logout;
  }

  render() {
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);

    return (
      <Router>
        <div className="app-container">
          <div className="sidenav">
            <img
              src={loggedIn ? currentUser.profile.profPicture : ''}
              alt="Foto de perfil"
              id="profilePicture"
            />
            <NavLink to="/Coordinator">
            <div id="username">
              { loggedIn ? currentUser.username : ''} 
            </div>
            </NavLink>
            <div className="nav-wrap">
              <div className="upper-links">
                <div className="link-wrap">
                  <i className="material-icons violet">assignment</i>
                  <NavLink to="/Courses"> Cursos</NavLink>
                </div>
                <div className="link-wrap">
                  <i className="material-icons violet">people</i>
                  <NavLink to="/Student"> Estudiantes </NavLink>
                </div>
                <div className="link-wrap">
                  <i className="material-icons violet">assessment</i>
                  <NavLink to="/Estimate"> Estimaciones </NavLink>
                </div>
              </div>
              <div className="bottom-links">
                <div className="link-wrap" id="logoff">
                  <i className="material-icons violet">exit_to_app</i>
                  <a href="#" onClick={this.logout}>
                    {" "}
                    Salir{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="whole-background">
          <Switch>
            <Route path="/Coordinator" component={Coordinator} exact/>
            <Route path="/Estimate" component={Estimate} exact/>
            <Route path="/Student" component={Student} exact/>
            <Route path="/Courses" component={Courses} exact/>
            <Route path="/Courses/:id" component={CourseDetail} exact/>
            <Route path="/" component={Welcome} exact/>
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default withTracker( () => {
  const currentUser = Meteor.user();
  return {
    currentUser,
  };
})(MainContainer);
