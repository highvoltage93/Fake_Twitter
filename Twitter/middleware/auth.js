const config = require('config')
const jwt = require('jsonwebtoken')

// module.exports = function (req, res, next) {
//     const token = req.header('x-auth-token')
//     if (!token) res.status(400).json({ msg: "No Token" })

//     const decoded = jwt.verify(token, config.get("JWTSecret"))

//     req.user = decoded.payload.user
//     next()
// }

module.exports = function (req, res, next){
    const token = req.header('x-auth-token')
    if(!token) res.status(401).json({msg: 'No token, authorization denied'})

    const decoded = jwt.verify(token, config.get('JWTSecret'))
    req.user = decoded.payload.user
    next()
}