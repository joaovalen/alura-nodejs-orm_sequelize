const bodyParser = require('body-parser')

const users = require('./users')
const levels = require('./levels')
const classes = require('./classes')

module.exports = app => {
  app.use(
    bodyParser.json(),
    users,
    levels,
    classes
  )
}