const express = require('express')
const route = express.Router()
const controller = require('../controllers/auth')

route.post('/registration', controller.registration)

module.exports = route