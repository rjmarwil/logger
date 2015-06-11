var bunyan = require('bunyan')

var name = require(process.cwd() + '/package.json').name

module.exports = bunyan.createLogger({
  name: name,
  streams: require('./streams')
})
