const express = require('express')
const router = express.Router()
const author_controller = require('../controllers/author')

router.get('/author/:id', author_controller.authorArticles)

module.exports = router;