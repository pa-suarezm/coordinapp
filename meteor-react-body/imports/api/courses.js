import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const CoursesCollection = new Mongo.Collection('courses');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('courses', function tasksPublication() {
    return CoursesCollection.find({owner: this.userId });
  });
  
}