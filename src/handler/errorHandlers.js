const {
  ValidationError
} = require('express-validation')
const winston = require('winston')

exports.catchErrors = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next)
  }
}

exports.notFound = (req, res) => {
  winston.warn('Not found route ' + req.originalUrl)
  res.status(404).json({
    errors: 404,
    messages: 'Not Found'
  })
}

exports.validationHandler = (err, req, res, next) => {
  if (!(err instanceof ValidationError)) {
    return next(err)
  }

  winston.warn('Bad request ' +  JSON.stringify(err.errors))

  res.status(400).json({
    message: err.message,
    errors: err.errors
  })
}

exports.databaseError = (err, req, res, next) => {
  if (err.name === 'MongoError') {
    winston.warn('MongoDB error ' +  JSON.stringify(err))

    res.status(422).json({
      message: err.message,
      errors: err.errors
    })
  } else {
    next(err)
  }
}

exports.productionErrors = (err, req, res, next) => {
  winston.error('Internal server error ' +  JSON.stringify(err))

  res.status(err.status || 500).json({
    message: err.message,
    errors: JSON.stringify(err)
  })

  next()
}
