const express = require('express')
const route = express.Router()
const controller = require('../controllers/auth')
const auth = require('../middleware/auth')

route.post('/registration', controller.registration)
route.post('/login', controller.login)
route.get('/auth', auth, controller.auth)

module.exports = route