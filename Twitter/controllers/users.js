const User = require('../models/User')
const Tweet = require('../models/Tweet')

module.exports.search = async (req, res) => {
    var re = new RegExp(req.params.value, 'i');
    let users = await User.find({fullName: {$regex: re}})

    // let users = User.find({$text: {$search: req.body.value.toString()}})
    // let users = await User.find({ "fullName": { $regex: /^a/ , value: 'i' } })
    res.status(200)
    res.send(users)
}

module.exports.get_users = async (req, res) => {
    let users = await User.find().limit(10).sort({ joined: -1 }).select('fullName avatar _id email')

    res.status(200)
    res.send(users)
}

module.exports.get_profile_user = async (req, res) => {
    let userID = req.params.profileID
    let user = await (await User.findById(userID).select('--password').populate('tweets'))

    res.status(200)
    res.send(user)
}

module.exports.follow = async (req, res) => {
    let userID = req.body.userID,
        authID = req.user.id

    let a = await User
        .findByIdAndUpdate(
            { _id: authID },
            { $push: { following: [userID] } },
            { new: true }
        )

    let b = await User
        .findByIdAndUpdate(
            { _id: userID },
            { $push: { followers: [authID] } },
            { new: true }
        )

    res.status(200)
    res.send(a, b)
}

module.exports.bg = async (req, res) => {
    let bg = req.body.bg
    let user = await User.findByIdAndUpdate(
        { _id: req.user.id },
        { '$set': { background_color: bg } },
        { new: true }
    )

    res.status(200)
    res.send(user)
}