const express = require('express')
const route = express.Router()
const controller = require('../controllers/users')
const auth = require('../middleware/auth')
// const multer = require('../middleware/upload')


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename(req, file, cb) {
        cb(null, `${file.originalname}`)
    }
})
const upload = multer({ storage: storage })

// http://localhost:5678/

route.post('/search', controller.search)
route.get('/get_users_content', controller.get_users)
route.get('/profile/:profileID', controller.get_profile_user)
route.post('/follow', auth, controller.follow)
route.patch('/bg', auth, controller.bg)
route.patch('/proile_photo', upload.single('avatar'), auth,  controller.upload_avatar)

module.exports = route