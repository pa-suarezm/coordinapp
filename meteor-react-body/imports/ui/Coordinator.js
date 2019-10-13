import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { Coordinators } from '../api/coordinators.js';

// Task component - represents a single todo item
export default class Coordinator extends Component {

    deleteThisCoordinator(){
        Meteor.call('coordinators.remove', this.props.coordinator._id);
    }

    //Here could goes the method for updatin coordinators

    render() {
        // Give tasks a different className when they are checked off,
        // so that we can style them nicely in CSS
        const coordinatorClassName = classnames({
          name: this.props.coordinator.name,
          career: this.props.coordinator.career,
          email: this.props.coordinator.email,
        });
    
        return (
          <li className={coordinatorClassName}>
            <span className="text">
              <strong>{this.props.coordinator.name}</strong>: {this.props.coordinator.career}
            </span>
          </li>
        );
    }
}