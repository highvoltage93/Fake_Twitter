const multer = require('multer')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        cb(null, `${file.originalname} + ${Date.now()}`)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'avatar/jpeg' || file.mimetype === 'avatar/jpg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const limits = {
    fileSize: 1024 * 1024 * 5
}

module.exports = multer({ storage, fileFilter, limits })