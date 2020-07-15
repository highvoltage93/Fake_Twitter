const { Schema } = require("mongoose");


const User = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ''
    },
    poster: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: "Status"
    },
    joined: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toLocaleString()
    }
})