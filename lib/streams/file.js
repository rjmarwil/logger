var config = require('config').get('log')

module.exports = {
  type: 'rotating-file',
  path: config.path,
  level: config.levels.file,
  period: config.period, // daily rotation
  count: config.count // keep 3 back copies
}
