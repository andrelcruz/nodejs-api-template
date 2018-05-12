const winston = require('winston')

const level = process.env.LOG_LEVEL || 'debug'

const configureLogger = () => {
  winston.configure({
    transports: [
      new winston.transports.Console({
        level,
        timestamp: true,
        colorize: true,
      })
    ]
  })
}

module.exports = configureLogger()
