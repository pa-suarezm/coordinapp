import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from "react-router-dom";

class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    };
  }

  render(){
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    return (
      <div>
          <h1 className="text-center">
            { loggedIn ? 'Welcome '+currentUser.username : '' }
          </h1>
      </div>
    );
  }
}

MainPage.propTypes = {
    username: PropTypes.string
}

export default withTracker( () => {
  const currentUser = Meteor.user();
  return {
    currentUser,
  };
})(MainPage);

