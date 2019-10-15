import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../../client/main.css";
import { withTracker } from 'meteor/react-meteor-data';

import { CoursesCollection } from "../../api/courses.js";
import Course from "./Course";
import CourseDetail from "./CourseDetail";

const handleInputChange = () => {};

class Courses extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.courses);
  }

  renderCourses(){

    let courses = this.props.courses;

    return courses.map((course) =>{

      return(<Course
              key = {course._id} 
              course = {course}
            />
      );
    });
  }

  render(){
    return (
      <div className="wrap-background">
        <div className="course-wrap">
          <h1>Cursos</h1>
          <div className="search-wrap">
            <i className="material-icons violet search">search</i>
            <input
              className="search-bar"
              placeholder="Buscar cursos..."
              value=""
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="course-list">
            {this.renderCourses()}
          </div>
        </div>
        <div className="course-detail">
          <CourseDetail />
        </div>
      </div>
    );
  }
};
export default withTracker( () => {

  return {
    courses : CoursesCollection.find({owner : Meteor.userId()}).fetch(),
    currentUser : Meteor.user()
  };
})(Courses);

