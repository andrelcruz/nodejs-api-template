const express = require('express')
const router = express.Router()

/**
 * @apiDefine defaultDoc
 *
 *
 * @apiError {Object} 400 Invalid input
 * @apiError {Object} 404 Not found
 * @apiError {Object} 422 Cannot process input
 * @apiError {Object} 500 Internal server error
 */

router.use('/feature', require('./feature/routes'))

module.exports = router
