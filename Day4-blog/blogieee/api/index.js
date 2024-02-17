const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const Post = require('./models/Post');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb://localhost:27017/Blog');

app.post('/register', async (req,res) => {
  //Take user information from request body
  //Store it in the database
});

app.post('/login', async (req,res) => {
  //Check user exists in database by username from request body
  //Check password hash matched hash in database
  //Create token and send it to logged in user inside a 🍪
});

app.get('/profile', (req,res) => {
  //Verify token using secret and extract user info
  //send user info
});

app.post('/logout', (req,res) => {
  //Return empty cookie to delete token from user 🍪
});

app.post('/post', uploadMiddleware.single('file'), async (req,res) => {
  //Verify token using secret
  //Get post data and add it to the database
});

app.put('/post',uploadMiddleware.single('file'), async (req,res) => {
  //Verify token
  //Get required post to update from database
  //Check user is author of the post
  //Update post in database
});

app.get('/post', async (req,res) => {
  //Get most recent 20 posts from database and send them
});

app.get('/post/:id', async (req, res) => {
  //Get post by its id from database and send it
})

const port = 4000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});