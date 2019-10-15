import React, { Component } from "react";
import "../../../client/main.css";
import { Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

//Components
import coordinator from "../components/Coordinator";
import Student from "../components/Student";
import Estimate from "../components/Estimate";
import Courses from "../components/Courses";
import CourseDetail from "../components/CourseDetail";

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    Meteor.logout(err => {
      if (err) {
        console.log(err.reason);
      } else {
        this.props.history.push("/login");
      }
    });
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
            <Courses />
            <Route path="/Coordinator" component={coordinator} />
            <Route path="/Estimate" component={Estimate} />
            <Route path="/Student" component={Student} />
            <Route path="/Courses" component={Courses} />
            <Route path="/Courses/:id" component={CourseDetail} />
          </div>
        </div>
      </Router>
    );
  }
}
