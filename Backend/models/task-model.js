const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        // trim: true
    },
    description: {
        type: String,
        // trim: true,
    },
    flag: {
        type: String,
        enum: ["pending", "in-progress", "completed"],
        default: "pending"
    },
    dueData: {
        type: Date
    }

}, { timestamps: true })

module.exports = mongoose.model('task', taskSchema)