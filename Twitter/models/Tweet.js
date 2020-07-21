const mongoose = require("mongoose");
const Schema = mongoose.Schema


const TweetSchema = new Schema({
    tweet_img: {
        type: String
    },
    tweet_date: {
        type: Date,
        default: Date.now()
    },
    tweet_text: {
        type: String
    },
    tweet_author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    pinned: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('Tweet', TweetSchema)