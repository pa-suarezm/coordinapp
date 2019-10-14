import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

// Task component - represents a single todo item
export default class Coordinator extends Component {

    deleteThisCoordinator(){
        Meteor.call('coordinators.remove', this.props.coordinator._id);
    }

    //Here could goes the method for updatin coordinators

    render() {
        // Give tasks a different className when they are checked off,
        // so that we can style them nicely in CSS
        
    
        return (
          <div>
            <form>
            <h1>Mi perfil</h1>
            <h3>Nombre:</h3>
              <input type="text" name="name" defaultValue="Juan Rodriguez"></input><br></br><br></br>
              <h3>Correo electronico:</h3>
              <input type="text" name="email" defaultValue="j.rodriguez@hotmail.com"></input><br></br><br></br>
              <h3>Departamento:</h3>
              <input type="text" name="career" defaultValue="Arte"></input><br></br><br></br>
              <input type="submit" value="Actualizar"></input>
            </form>
          </div>
        );
    }
}