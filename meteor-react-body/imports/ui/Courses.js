import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../client/main.css";

import Course from "./Course.js";
import CourseDetail from "./CourseDetail";

const handleInputChange = () => {};

const Courses = props => {
  return (
    <Container>
      <Row>
        <Col xl="5" lg="5" md="5" sm="5" xs="5">
          <div className="wrap-background">
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
              <Course />
            </div>
          </div>
        </Col>
        <Col xl="7" lg="7" md="7" sm="7" xs="7">
          <CourseDetail />
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
