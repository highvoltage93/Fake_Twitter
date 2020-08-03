const express = require('express')
const route = express.Router()
const controller = require('../controllers/tweet')
const auth = require('../middleware/auth')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename(req, file, cb) {
        cb(null, `${file.originalname}`)
    }
})
const upload = multer({ storage: storage })

route.post('/add', auth, upload.single('tweet_img'), controller.add_new_tweet)
route.get('/', auth, controller.get_my_tweets)
route.get('/getAllTweetsFollow', auth, controller.get_all_tweets_follow)
route.post('/delete', auth, controller.delete_tweet)
route.post('/pinned', auth, controller.set_pinned_tweet)
route.post('/like', auth, controller.like)
route.post('/dislike', auth, controller.dislike)
route.post('/likes_tweets', controller.get_likes_tweets)

module.exports = route