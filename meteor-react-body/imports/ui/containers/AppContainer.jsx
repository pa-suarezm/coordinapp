import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../../../client/main.css";
import { withHistory } from "react-router-dom";
import MainContainer from "../containers/MainContainer";


export default class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  getMeteorData() {
    return { isAuthenticated: Meteor.userId() !== null };
  }

  componentWillMount() {
    if (!this.state.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.isAuthenticated) {
      this.props.history.push("/login");
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

  render() {
    return (
      <div className="app-container">
        <MainContainer logout = {this.logout}/>
      </div>
    );
  }
}
