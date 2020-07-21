const User = require('../models/User')
const Tweet = require('../models/Tweet')

module.exports.search = async (req, res) => {
    let value = req.body.value.toString()
    // let users = User.find({$text: {$search: req.body.value.toString()}})
    // let users = await User.find({ "fullName": { $regex: /^a/ , value: 'i' } })
    res.status(200)
    res.send(users)
}

module.exports.get_users = async (req, res) => {
    let users = await User.find().limit(10).sort({joined: -1}).select('fullName avatar _id email')

    res.status(200)
    res.send(users)
}

module.exports.get_profile_user = async (req, res) => {
    console.log('connect')
    let userID = req.params.profileID
    let user = await (await User.findById(userID).select('--password').populate('tweets'))

    res.status(200)
    res.send(user)
}