const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

module.exports.registration = async (req, res) => {
    let { email, password, telephoneNumber, fullName, location, date, month, year } = req.body.user
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
                                jwt.sign({ payload },
                                    config.get('JWTSecret'), { expiresIn: 3600 },
                                    (err, token) => {
                                        if (err) { throw err }
                                        res.status(200).json({
                                            token,
                                            user
                                        })
                                    }
                                )
                            })
                    })
                })
            })

    } catch (err) {
        console.log(err)
    }

}

module.exports.login = async (req, res) => {
    
    let { email, password } = req.body.user
    if (!email || !password) {
        return res.status(400).json({ msg: "Please enter all Fields" })
    }

    await User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User Does not exists' })

            const isMatch = bcrypt.compare(password, user.password)
            // bcrypt.compare(password, user.password)
            if (!isMatch) return res.json({ msg: 'Invalid credentials' })

            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign({ payload },
                config.get('JWTSecret'), { expiresIn: '365d' },
                (err, token) => {
                    if (err) { throw err }
                    res.status(200).json({
                        token,
                        user
                    })
                }
            )
        })
    // .then(user => {
    //     if (!user) return res.status(400).json({ msg: "User Does not exists" })

    //     const isMatch = bcrypt.compare(password, user.password)
    //     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" })

    //     const payload = {
    //         user: {
    //             id: user.id
    //         }
    //     }
    //     jwt.sign({ payload }),
    //         config.get('JWTSecret'), { expiresIn: '365d' },
    //         (err, token) => {
    //             if (err) throw err
    //             res.status(200).json({ token, user })
    //         }
    // })


}

module.exports.auth = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select('--password')
        res.json(user)
    } catch (err) {
        console.log('Load User ', err)
    }
}

