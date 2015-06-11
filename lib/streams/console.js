var config = require('config').get('log')

module.exports = {
  stream: process.stdout,
  level: config.levels.console
}
