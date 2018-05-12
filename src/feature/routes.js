const express = require('express')
const router = express.Router()
const Controller = require('./controller')
const { catchErrors } = require('../handler/errorHandlers')

/**
 * @Exemple method for route
 * @api {get} /feature GET /feature
 * @apiDescription Endpoint for testing
 * @apiName GetTest
 * @apiGroup feature
 *
 * @apiUse defaultDoc
 */
router.get('/', catchErrors(Controller.getTest))

module.exports = router
