var bunyan = require('bunyan')

module.exports = bunyan.createLogger({
  name: require(process.cwd() + '/package.json').name,
  streams: require('./streams')
})
