const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {type:String, required:true, unique:true},
    password: {type:String},
    githubId: {type:String},
    githubUsername: {type:String},
    leetcodeUsername: {type:String},
    codeforcesHandle:{type:String},
    stats: {type: Object}
});

module.exports = mongoose.model('User',UserSchema);