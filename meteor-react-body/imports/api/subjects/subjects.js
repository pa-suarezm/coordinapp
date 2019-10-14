import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Subjects = new Mongo.Collection('subjects');

if(Meteor.isServer) {
    Meteor.publish('subjects', function subjectsPublication() {
        return Subjects.find({});
    });
}

Meteor.methods({
    'subjects.insert'(name, code, credits){
        check(name, String);        //EJ: Estructuras de Datos
        check(code, String);        //EJ: ISIS-1204
        check(credits, String);     //EJ: 3

        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }

        Subjects.insert({
            name,
            code,
            credits,
            createdAt: new Date(),
        });
    },

    'subjects.remove'(subject_id){
        check(subject_id, String);

        Subjects.remove(subject_id);
    },

    'subjects.update'(subject_id, pName, pCode, pCredits){
        check(subject_id, String);
        check(pName, String);
        check(pCode, String);
        check(pCredits, String);

        Subjects.update(subject_id,
            { $set: 
                {
                    name: pName,
                    code: pCode,
                    credits: pCredits
                }
            });
    }
});