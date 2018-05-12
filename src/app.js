const express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  routes = require('./routes'),
  errorHandlers = require('./handler/errorHandlers')

app.use('/docs', express.static('doc'))

app.use(bodyParser.json())
app.use(cors())

app.use('/api', routes)
app.use(errorHandlers.notFound)
app.use(errorHandlers.validationHandler)
app.use(errorHandlers.databaseError)
app.use(errorHandlers.productionErrors)

module.exports = app
