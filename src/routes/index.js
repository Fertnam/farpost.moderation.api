const express = require('express')
const router = express.Router()

const advertisementsController = require('../controllers/advertisements')

router
    .route('/advertisements')
    .get(advertisementsController.get)
    .post(advertisementsController.create)

module.exports = router
