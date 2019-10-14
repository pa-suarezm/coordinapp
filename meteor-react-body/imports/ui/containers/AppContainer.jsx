import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../../../client/main.css';
import { withHistory } from 'react-router-dom';
import MainContainer from './MainContainer';

import Courses from "../Courses"

export default class AppContainer extends Component {
    
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  componentWillMount(){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  logout(e){
    e.preventDefault();
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
            this.props.history.push('/login');
        }
    });
  }

  render(){
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
                  <a href="#" onClick={this.logout}>Salir</a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="10" md="10" sm="10" xs="10">
          <Courses/>
          </Col>
        </Row>
      </Container>
    );
  }
}