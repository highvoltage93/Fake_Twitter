const express = require('express')
const route = express.Router()
const controller = require('../controllers/explore')

route.get('/newUsers', controller.get_new_users)
route.get('/lastTweets', controller.get_last_tweets)

module.exports = route