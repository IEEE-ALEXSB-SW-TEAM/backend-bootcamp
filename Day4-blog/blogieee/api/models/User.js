const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  //Create user schema
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;