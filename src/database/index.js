const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/nodeapiusermng')
mongoose.Promise = global.Promise

module.exports = mongoose