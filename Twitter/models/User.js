const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new Schema({
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
    telephoneNumber: { type: Number },
    fullName: { type: String },
    location: { type: String },
    birthDay: {
        date: { type: Number },
        month: { type: String },
        year: { type: Number }

    },
    joined: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toLocaleString()
    }
})
module.exports = mongoose.model('User', UserSchema)