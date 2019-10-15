import React, { Component } from "react";
import "../../../client/main.css";

export default class Course extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    const course = this.props.course;

    return(<div className="course-card-selected">
            <h3>{course.name}</h3>
            <h4>Código: {course.code}</h4>
            <h5>Créditos: {course.credits}</h5>
          </div>
    );
  }
}