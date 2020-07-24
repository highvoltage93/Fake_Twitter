const User = require('../models/User')
const Tweet = require('../models/Tweet')
const { populate } = require('../models/User')

module.exports.add_new_tweet = async (req, res) => {
    const newTweet = await new Tweet({
        tweet_img: req.file ? req.file.path : '',
        tweet_text: req.body.tweet,
        tweet_author: req.user.id
    })

    let updateUserTweets = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $push: { tweets: newTweet._id } },
        { new: true }
    )

    newTweet.save().then()
    res.status(200)
    res.send(newTweet)
}

module.exports.get_my_tweets = async (req, res) => {
    const tweets = await Tweet.find({ tweet_author: req.user.id }).sort({ tweet_date: -1 })
    res.status(200)
    res.send(tweets)
}

module.exports.delete_tweet = async (req, res) => {
    try {
        let tweet = await (await Tweet.findById(req.body.tweet_id)).deleteOne();
        let userTweets = await User.findByIdAndUpdate(
            { _id: req.user.id },
            {
                $pull: {
                    "tweets": req.body.tweet_id
                }
            },
            { new: true }
        )

        res.status(200)
    } catch (err) {
        console.log(err)
    }
}

module.exports.set_pinned_tweet = async (req, res) => {

    let checkPinned = await Tweet
        .findOne({ pinned: true })

    if (checkPinned) {
        let falseCheck = await Tweet.findByIdAndUpdate(
            { _id: checkPinned._id },
            { $set: { "pinned": false } },
            { new: true }
        )
    }



    let tweet = await Tweet.findOneAndUpdate(
        { _id: req.body.tweet_id },
        { $set: { "pinned": true } },
        { new: true }
    )
}

module.exports.like = async (req, res) => {
    let like = await Tweet.findByIdAndUpdate(
        { _id: req.body.tweetID },
        { $push: { likes: [req.user.id] } },
        { new: true }
    )

    let usersLike = await User.findByIdAndUpdate(
        { _id: req.user.id },
        { $push: { user_likes: [req.body.tweetID] } },
        { new: true }
    )

    res.status(200)
    res.send(like)
}

module.exports.dislike = async (req, res) => {
    let like = await Tweet.findByIdAndUpdate(
        { _id: req.body.tweetID },
        { $pull: { likes: req.user.id } },
        { new: true }
    )

    let usersLike = await User.findByIdAndUpdate(
        { _id: req.user.id },
        { $pull: { user_likes: req.body.tweetID } },
        { new: true }
    )
    res.status(200)
    res.send(like)
}

module.exports.get_likes_tweets = async (req, res) => {
    let tweets = await User
        .findById(req.body.userID)
        // .select('user_likes')
        // .populate('user_likes')

        .populate({
            path: 'user_likes',
            populate: {
                path: 'tweet_author'
            }
        })
        .sort({ tweet_date: -1 })

    res.status(200).send(tweets)
}