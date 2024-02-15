const mongoose = require('mongoose');

// Professor Schema
const professorSchema = new mongoose.Schema({
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
        unique: true
    }
});

const Professor = mongoose.model('Professor', professorSchema);
module.exports = { Professor };