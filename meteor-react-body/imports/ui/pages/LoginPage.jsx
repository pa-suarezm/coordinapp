import React, { Component } from "react";
import { withHistory, Link } from "react-router-dom";
import { createContainer } from "meteor/react-meteor-data";
import { Container, Col, Row, Image } from "react-bootstrap";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    Meteor.loginWithPassword(email, password, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.props.history.push("/");
      }
    });
  }

  render() {
    const error = this.state.error;
    return (
      <div>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="logo-wrap">
                <img id="logo" src="img/default/logo.png" />
                <h1 id="logo-title">Coordinapp</h1>
                <p id="logo-description">
                  Planea y organiza cursos con la información que necesitas.
                </p>
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="login-wrap">
                <h1 className="text-center">Ingresar</h1>
                <div className="modal-body">
                  {error.length > 0 ? (
                    <div className="alert alert-danger fade in">{error}</div>
                  ) : (
                    ""
                  )}
                  <form
                    id="login-form"
                    className="form col-md-12 center-block"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        id="login-email"
                        className="form-control input-lg"
                        placeholder="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        id="login-password"
                        className="form-control input-lg"
                        placeholder="password"
                      />
                    </div>
                    <div className="form-group text-center">
                      <input
                        type="submit"
                        id="login-button"
                        className="btn btn-primary btn-lg btn-block"
                        value="Ingresar"
                      />
                    </div>
                    <div className="form-group text-center">
                      <p className="text-center">
                        ¿No tienes una cuenta? Regístrate{" "}
                        <Link to="/signup">aquí</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
