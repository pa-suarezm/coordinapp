import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../client/main.css";

import Cursos from "./Courses";

const sideNav = props => {
  return (
    <Container fluid="true">
      <Row>
        <Col lg="2" md="2" sm="2" xs="2">
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
              <div className="link-wrap">
                <i className="material-icons violet">assignment</i>
                <a href="">Cursos</a>
              </div>
              <div className="link-wrap">
                <i className="material-icons violet">people</i>
                <a href="">Estudiantes</a>
              </div>
              <div className="link-wrap">
                <i className="material-icons violet">assessment</i>
                <a href="">Estimaciones</a>
              </div>
              <div className="link-wrap" id="logoff">
                <i className="material-icons violet">exit_to_app</i>
                <a href="">Salir</a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="10" md="10" sm="10" xs="10">
          <Cursos />
        </Col>
      </Row>
    </Container>
  );
};

export default sideNav;
