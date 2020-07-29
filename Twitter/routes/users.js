const express = require('express')
const route = express.Router()
const controller = require('../controllers/users')
const auth = require('../middleware/auth')

route.post('/search', controller.search)
route.get('/get_users_content', controller.get_users)
route.get('/profile/:profileID', controller.get_profile_user)
route.post('/follow', auth, controller.follow)
route.patch('/bg', auth, controller.bg)

module.exports = route