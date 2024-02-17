const express = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const { Student } = require('./model/student');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('./'))
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

const uri = "mongodb://localhost:27017/college";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const JWT_SECRET = 'IEEE';

app.post('/signup', async (req, res) => {
    try {
        const { name, age, gpa, password } = req.body;
        const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

        const newStudent = new Student({
            name,
            password: hashedPassword,
            age,
            gpa
        });

        await newStudent.save();

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
        console.log(req.body)
        const student = await Student.findOne({ name });

        if (!student) {
            return res.status(404).send('Student not found');
        }

        const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
        const passwordMatch = (hashedPassword == student.password)

        if (!passwordMatch) {
            return res.status(401).send('Invalid password');
        }

        const token = jwt.sign({ id: student._id }, JWT_SECRET);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error signing in');
    }
});

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send('Unauthorized: No token provided');
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized: Invalid token');
        }
        req.studentId = decoded.id;
        next();
    });
};

// Protected route to get GPA
app.get('/getGpa', verifyToken, async (req, res) => {
    try {
        const student = await Student.findById(req.studentId);

        if (!student) {
            return res.status(404).send('Student not found');
        }

        res.json({ gpa: student.gpa });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting GPA');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
