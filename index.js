require('./src/logger')
require('./src/unhandledProcess')
require('./src/db')

const app = require('./src/app')
const winston = require('winston')

const port = process.env.PORT || 3010
app.listen(port, () => winston.info(`App listening on port --${port}!`))
