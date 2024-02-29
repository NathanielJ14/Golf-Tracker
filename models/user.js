const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Uses passport to simplify user sign up
const passportLocalMongoose = require('passport-local-mongoose');

//DB schema for user
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);