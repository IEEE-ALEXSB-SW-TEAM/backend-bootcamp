const express = require('express');
const mongoose = require('mongoose');
const { Student } = require('./model/student');

const app = express();
const PORT = 5000;
const MONGODB_URI = 'mongodb+srv://root:root@testcluster.szftydp.mongodb.net/collegeDB?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define route to get student by ID
app.get('/students/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findById(id).populate('courses.professor');
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
