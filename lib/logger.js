'use strict'

const bunyan = require('bunyan')
const config = require('./config')

config.setDefaults()

module.exports = bunyan.createLogger({
  name: require(process.cwd() + '/package.json').name,
  streams: require('./streams')
})
