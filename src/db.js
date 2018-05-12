const mongoose = require('mongoose')
const winston = require('winston')

const mongodb_url = process.env.MONGODB_URL || 'mongodb://localhost/test'

const configureDatabase = () => {
  mongoose.Promise = global.Promise
  mongoose.connection.on('error', (err) => {
    winston.error(`cannot connet to mongoDB => ${err.message}`)
  })
  mongoose
    .connect(mongodb_url, { useMongoClient: true })
    .then(winston.info('Connecting'))
    .catch(error => winston.error(error))

  require('./model/exempleModel')
}

module.exports = configureDatabase()
