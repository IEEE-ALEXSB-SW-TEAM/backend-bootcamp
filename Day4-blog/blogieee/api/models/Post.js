const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const PostSchema = new Schema({
  //Create post schema
});

const PostModel = model('Post', PostSchema);

module.exports = PostModel;