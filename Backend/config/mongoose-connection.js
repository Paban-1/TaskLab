// import mongoose & required modules
const mongoose = require("mongoose")
const dbgr = require("debug")("development: mongoose")
const config = require("config")

// connect to MongoDB using the URI from config
mongoose.connect(`${config.get("MONGODB_URI")}/tasklab`).then(function () {
    dbgr("MongoDB Connected Successfully");
}).catch(function (err) {
    dbgr("Error connecting to MongoDB:", err);
})

module.exports = mongoose.connection