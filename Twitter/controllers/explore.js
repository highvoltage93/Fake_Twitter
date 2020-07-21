const User = require('../models/User')
const Tweet = require('../models/Tweet')

module.exports.get_new_users = async (req, res) => {
    const new_users = await User
        .find() 
        .limit(10)
        .sort({ joined: -1 })
        .select('fullName _id joined avatar')


    res.status(200)
    res.send(new_users)
}

module.exports.get_last_tweets = async (req, res) => {
    const tweets = await Tweet.find().limit(10).sort({tweet_date: -1}).populate()

    res.status(200)
    res.send(tweets)
}