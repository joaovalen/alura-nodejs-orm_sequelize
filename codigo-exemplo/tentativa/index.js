// npm install express mysql2 sequelize sequelize-cli 
const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)

app.listen(port, () => console.log(`The server is running at ${port}`))

module.exports = app