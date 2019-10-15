import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

// Task component - represents a single todo item
export default class Coordinator extends Component {

    deleteThisCoordinator(){
        Meteor.call('coordinators.remove', this.userId);
    }

    //Here could goe the method for updating coordinators
    handleSubmit = (event) => {
      event.preventDefault();

      const form_name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();
      const form_career = ReactDOM.findDOMNode(this.refs.careerInput).value.trim();
      const form_email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim();

      console.log(form_name);
      console.log(form_career);
      console.log(form_email);

      Meteor.call('coordinators.update', this.userId, form_name, form_career, form_email);

    };

    render() {
        // Give tasks a different className when they are checked off,
        // so that we can style them nicely in CSS    
        return (
          <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <h1>Mi perfil</h1>
              <h3>Nombre:</h3>
              <input type="text" ref="nameInput" name="name" defaultValue="Juan Rodriguez"></input><br></br><br></br>
              <h3>Correo electronico:</h3>
              <input type="text" ref="emailInput" name="email" defaultValue="j.rodriguez@hotmail.com"></input><br></br><br></br>
              <h3>Departamento:</h3>
              <input type="text" ref="careerInput" name="career" defaultValue="Arte"></input><br></br><br></br>
              <input type="submit" value="Actualizar"></input>
            </form>
          </div>
        );
    }
}