const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gpa: {
        type: Number,
        required: true
    },
    fulltime: {
        type: Boolean,
        default: true
    },
    registerDate: {
        type: Date,
        required: true,
        default: Date.now,
        immutable: true 
    },
    graduationDate: {
        type: Date,
        default: null
    },
    courses: [{
        name: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true,
        },
        professor: [{
            name: {
                type: String,
                required: true
            },
            department: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true,
            }
        }]
    }],
    address: {
        type: String
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = { Student };
