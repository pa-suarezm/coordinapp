import { Meteor } from 'meteor/meteor';

import Subjects from '../imports/api/subjects/subjects';
import Coordinators from '../imports/api/coordinators/coordinators.js';

Accounts.onCreateUser(function(options, user) {
    // Use provided profile in options, or create an empty profile object
    user.profile = options.profile || {};

    // Assigns the career to the user
    user.profile.career = options.career;

    // Basic Prof Picture Setup
    user.profile.profPicture = Meteor.absoluteUrl() + "img/default/user.png";
    // Organization
    user.profile.organization = ["Universidad de los Andes"];
    //Basic Role Set Up
    user.roles = ["User"];

    // Returns the user object
    return user;
});

Meteor.startup(() => {
  // code to run on server at startup
});

