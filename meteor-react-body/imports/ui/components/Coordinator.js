import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import "../../../client/main.css";
import { Courses } from "../../api/courses.js";

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
      const form_email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim();

      console.log(form_name);
      console.log(form_email);

      Meteor.users.update( Meteor.userId() , { $set: {
         "username": form_name, 
         "emails" : [{"adress": form_email}, {"verified" : false}], 
        }
      });

    };

    handleSubmitCourse = (event) => {
      event.preventDefault();

      const form_name_c = ReactDOM.findDOMNode(this.refs.nameCourseInput).value.trim();
      const form_code = ReactDOM.findDOMNode(this.refs.codeInput).value.trim();
      const form_credits = ReactDOM.findDOMNode(this.refs.creditsInput).value.trim();

      const form_students = ReactDOM.findDOMNode(this.refs.studentsInput).value.trim();
      const form_sections = ReactDOM.findDOMNode(this.refs.sectionsInput).value.trim();
      const form_efective = ReactDOM.findDOMNode(this.refs.efectiveInput).value.trim();

      const form_avg = ReactDOM.findDOMNode(this.refs.avgInput).value.trim();
      const form_aprove = ReactDOM.findDOMNode(this.refs.aproveInput).value.trim();
      const form_fail = ReactDOM.findDOMNode(this.refs.failInput).value.trim();

      console.log(form_name_c);

      Courses.insert(
        { owner: Meteor.userId(),
          name : form_name_c,
          code : form_code,
          credits : form_credits,
          students : form_students,
          sections : form_sections,
          efective : form_efective,
          avg : form_avg,
          aprove : form_aprove,
          fail : form_fail
        }
      );

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
              <div className="col-md-6">
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
              <div className="col-md-6">
                <form onSubmit={this.handleSubmitCourse.bind(this)}>
                  <h1>Cargar Cursos</h1>
                  <h3>Nombre:</h3>
                  <input type="text" ref="nameCourseInput" name="name" ></input><br></br><br></br>
                  <h3>Codigo:</h3>
                  <input type="text" ref="codeInput" name="code" ></input><br></br><br></br>
                  <h3>Creditos:</h3>
                  <input type="number" ref="creditsInput" name="career" ></input><br></br><br></br>
                  <h3>Estudiantes:</h3>
                  <input type="number" ref="studentsInput" name="career" ></input><br></br><br></br>
                  <h3>Secciones:</h3>
                  <input type="number" ref="sectionsInput" name="career" ></input><br></br><br></br>
                  <h3>Efectividad:</h3>
                  <input type="number" step="0.01" ref="efectiveInput" name="career" ></input><br></br><br></br>
                  <h3>Nota Promedio:</h3>
                  <input type="number" step="0.01" ref="avgInput" name="career" ></input><br></br><br></br>
                  <h3>Aprobaron:</h3>
                  <input type="number" step="0.01" ref="aproveInput" name="career" ></input><br></br><br></br>
                  <h3>Reprobaron:</h3>
                  <input type="number" step="0.01" ref="failInput" name="career" ></input><br></br><br></br>
                  <input type="submit" className="btn btn-success" value="Cargar"></input>
                </form>
              </div>
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