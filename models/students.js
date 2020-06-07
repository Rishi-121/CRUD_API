const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    id : {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    rollno : {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('student', studentSchema);

