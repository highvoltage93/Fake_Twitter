const express = require('express')
const route = express.Router()
const controller = require('../controllers/users')
const auth = require('../middleware/auth')
// const multer = require('../middleware/upload')


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


route.post('/search', controller.search)
route.get('/get_users_content', auth, controller.get_users)
route.get('/profile/:profileID', controller.get_profile_user)
route.patch('/follow', auth, controller.follow)
route.patch('/unfollow', auth, controller.unfollow)
route.patch('/bg', auth, controller.bg)
route.patch('/proile_photo', auth, upload.single('avatar'), controller.upload_avatar)
route.patch('/poster_photo', auth, upload.single('poster'), controller.upload_poster)
route.get('/list/:profileID', controller.get_follow_list)

module.exports = route