const express = require('express')
const route = express.Router()
const controller = require('../controllers/tweet')
const auth = require('../middleware/auth')

route.post('/add', auth, controller.add_new_tweet)
route.get('/', auth, controller.get_my_tweets)
route.post('/delete',auth, controller.delete_tweet)
route.post('/pinned', controller.set_pinned_tweet)
route.post('/like', auth, controller.like)
route.post('/dislike', auth, controller.dislike)
route.post('/likes_tweets', controller.get_likes_tweets)

module.exports = route