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
    tweet_author_avatar: {
        type: String
    },
    tweet_author_fullName: {
        type: String
    },
    pinned: {
        type: Boolean,
        default: false
    },
    likes: [
        {type: Schema.Types.ObjectId, ref: 'User'}
    ]

})

module.exports = mongoose.model('Tweet', TweetSchema)