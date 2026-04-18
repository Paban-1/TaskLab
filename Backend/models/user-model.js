// Required Modules
const mongoose = require('mongoose')

// Defining the User Schema
const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },

}, { timestamps: true })


// Exporting the model
module.exports = mongoose.model('user', userSchema)