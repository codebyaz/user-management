const express = require('express')
const bodyParser = require('body-parser')

// Init app's core
const app = express()

// Set app to process json requests
app.use(bodyParser.json())
// Set app to decode url parameters
app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers/authController')(app)

module.exports = app