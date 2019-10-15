import React, { Component } from "react";
import "../../../client/main.css";
import { Col } from "react-bootstrap";
import { withHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

//Components
import coordinator from "../components/Coordinator";
import Student from "../components/Student";
import Estimate from "../components/Estimate";
import Courses from "../components/Courses";
import CourseDetail from "../components/CourseDetail";
import Welcome from "../components/Welcome"

export default class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.logout = this.props.logout;
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <div className="sidenav">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7EjGF_qmL4nqmkWPRcXqTGyTZFhteHPpUrALAlPIDWWwIQLn-Q"
              alt="Foto de perfil"
              id="profilePicture"
            />
            <a href="" id="profileName">
              Peppa Pig
            </a>
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
            <Route path="/Coordinator" component={coordinator} exact/>
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
