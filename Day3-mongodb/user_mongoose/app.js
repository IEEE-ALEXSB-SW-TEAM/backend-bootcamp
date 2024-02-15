const express = require('express');
const crypto = require('crypto');
const mongoose = require('mongoose')
const { User } = require('./user');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('./'))

app.use(bodyParser.urlencoded({ extended: true }));

const uri = "mongodb://localhost:27017/IEEE";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.post('/signup', async (req, res) => {
    try {
        const { name, password, email } = req.body;
        const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

        const newUser = new User({
            name,
            password: hashedPassword,
            email
        });

        await newUser.save();

        res.status(201).send(`
            <h1>Student signed up successfully<\h1>
            <a href="./signin.html">sign in<\a>
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error signing up');
    }
});

// Sign in route
app.post('/signin', async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await User.findOne({ name });

        if (!user) {
            return res.status(404).send('user not found');
        }

        const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
        const passwordMatch = (hashedPassword == user.password)

        if (!passwordMatch) {
            return res.status(401).send('Invalid password');
        }
        res.status(200).send(`
            <h1>hello ${name} you have signed in successfully</h1>
        `)

    } catch (error) {
        console.error(error);
        res.status(500).send('Error signing in');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
