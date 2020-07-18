const mongoose = require("mongoose");
const Schema = mongoose.Schema


const TweetSchema = new Schema({
    tweet_img: {

    },
    name_author: {

    },
    id_author: {

    },
    ava_author: {
        type: String
    },
    date: {
        type: Date,
        default: new Date(Date.now()).toLocaleString()
    },
    text: {
        type: String
    }

})

module.exports = mongoose.model('Tweet', TweetSchema)