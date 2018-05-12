# Template for a nodejs API

## Description

Rest API using node.js, mongodb and all of those good practices that make your heart smile

## Environment variables

- PORT
  - The server por to be used by the application
  - default: 3010
  - Exemple: 8080
- MONGODB_URL
  - Indica a url de conexão com o banco de dados
  - default: 'mongodb://localhost:27017/test'

- LOG_LEVEL
  - Root level for logging
  - default: debug
  - options:
    - emerg
    - alert
    - crit
    - error
    - warning
    - notice
    - info
    - debug

## Production depedencies

- API Framework
  - express
  - body-parser

- Param validator (request, body, query)
  - express-validation (outras opções eram: express-jsonschema)
  - joi

- Database
  - mongoose

- Logger/Debug
  - winston

## Dependências Desenvolvimento

- Debug
  - nodemon

- testing
  - mocha
  - chai

- Code
  - eslint
  - eslint-plugin-node
