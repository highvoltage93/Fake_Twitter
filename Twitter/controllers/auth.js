const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

module.exports.registration = async (req, res) => {
    let { email, password, telephoneNumber, fullName, location, date, month, year } = req.body
    if (!email || !password || !fullName) {
        return res.status(400).json({ msg: 'Enter all Fields' })
    }

    try {
        User.findOne({ email })
            .then(user => {
                if (user) res.status(400).json({ msg: 'User already exists' })

                const newUser = new User({
                    email, password, telephoneNumber, fullName, location,
                    birthDay: {
                        date, month, year

                    }
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err
                        newUser.password = hash
                        newUser.save()
                            .then(user => {
                                const payload = {
                                    user: {
                                        id: newUser.id
                                    }
                                }
                                jwt.sign({ payload }),
                                    config.get('JWTSecret'), { expiresIn: 360000 },
                                    (err, token) => {
                                        if (err) throw err
                                        res.status(200).json({
                                            user,
                                            token
                                        })
                                    }
                            })
                    })
                })
            })

    } catch (err) {
        console.log(err)
    }

}