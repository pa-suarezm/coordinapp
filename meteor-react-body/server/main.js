import { Meteor } from 'meteor/meteor';
import '../imports/api/courses.js';

// Meteor.courses.allow({

// });

Meteor.users.allow({
    update: function(userId, user) {
      return true; 
  
      /**
       * Don't use `return true` in production!
       * You probably need something like this:
       * return Meteor.users.findOne(userId).profile.isAdmin;
       */
    }
  });

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
  Meteor.publish('userData', function() {
    var currentUser;
    currentUser = this.userId;
    if (currentUser) {
        return Meteor.users.find({
            _id: currentUser
        }, {
            fields: {
                // Default
                "emails": 1,
                // Created profile property
                "profile": 1,
                // Created roles property
                "roles": 1
            }
        });
    } else {
        return this.ready();
    }
  });
  
  Meteor.publish('courses', function tasksPublication() {
    return Courses.find({owner: this.userId });
  });

});

