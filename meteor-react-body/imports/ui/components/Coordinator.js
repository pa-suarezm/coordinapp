import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import "../../../client/main.css";

// Task component - represents a single todo item
class Coordinator extends Component {

    constructor(props) {
      super(props);
      this.state = { username: '' };
    }

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

      Meteor.users.update( Meteor.userId() , { $set: {
         "username": form_name, 
         "emails" : [{"adress": form_email}, {"verified" : false}], 
        }
      });

    };

    render() {
        // Give tasks a different className when they are checked off,
        // so that we can style them nicely in CSS    
        let currentUser = this.props.currentUser;
        let userDataAvailable = (currentUser !== undefined);
        let loggedIn = (currentUser && userDataAvailable);

        console.log(currentUser);

        return (
          <div className="wrap-background">
            <div className="flex-container">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <h1>Mi perfil</h1>
                <h3>Nombre:</h3>
                <input type="text" ref="nameInput" name="name" defaultValue={loggedIn ? currentUser.username : ''}></input><br></br><br></br>
                <h3>Correo electronico:</h3>
                <input type="text" ref="emailInput" name="email" defaultValue={loggedIn ? currentUser.emails[0].address : ''}></input><br></br><br></br>
                <h3>Departamento:</h3>
                <input type="text" ref="careerInput" name="career" defaultValue={this.props.currentUser.profile.career} readOnly></input><br></br><br></br>
                <input type="submit" className="btn btn-success" value="Actualizar"></input>
              </form>
            </div> 
          </div>
        );
    }
}
export default withTracker( () => {
  const currentUser = Meteor.user();
  return {
    currentUser,
  };
})(Coordinator);