const winston = require('winston')

const unhandledProcess = () => {
  process.on('uncaughtException', (err) => {
    winston.error('uncaughtException! : ', err)
  })

  process.on('unhandledRejection', (reason, p) => {
    winston.error('Unhandled Rejection at:', p, 'reason:', reason)
  })
}

module.exports = unhandledProcess()
