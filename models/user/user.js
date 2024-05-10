const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    surname: {
        type: String,
        required: true,
        minlength: 2,
    },
    username: {
        type: String,
        required: true,
        minlength: 5,
    }, 
})

module.exports = mongoose.model("user", userModel) 