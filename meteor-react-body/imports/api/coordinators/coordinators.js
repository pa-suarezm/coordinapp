import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Coordinators = new Mongo.Collection('coordinators');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('coordinators', function coordinatorsPublication() {
    return Coordinators.find({});
  });
}

Meteor.methods({
  'coordinators.insert'(name, career, email) {
    check(name, String);
    check(career, String);
    check(email, String);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Coordinators.insert({
      name,
      career,
      email,
      createdAt: new Date(),
    });
  },
  'coordinators.remove'(coordinator_id) {
    check(coordinator_id, String);
    Coordinators.remove(coordinator_id);
  },
  'coordinators.update'(coordinator_id, nameB, emailB) {
    check(nameB, String);
    check(emailB, String);

    Coordinators.update(coordinator_id, { $set: { name: nameB, email: emailB} });
  },
});