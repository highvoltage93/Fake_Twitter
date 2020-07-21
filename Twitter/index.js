const express = require('express')()
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth')
const tweetRoute = require('./routes/tweet')
const exploreRoute = require('./routes/explore')
const usersRoute = require('./routes/users')


express.use(bodyParser.urlencoded({ extended: true }))
express.use(bodyParser.json())


mongoose.connect(config.get('MONGODB'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('MongoDB started'))
    .catch(err => console.log(`Mongoose ${err}`))

const PORT = config.get('PORT')
express.listen(PORT, () => console.log('Server started on', PORT))



express.use('/auth', authRoute)
express.use('/tweets',tweetRoute)
express.use('/explore', exploreRoute)
express.use('/users', usersRoute)