var path = require('path')
var config = require('config').get('log')

var appName = process.env.npm_package_name || 'default'
var filePath = path.join('/var/log', appName + '.log')

module.exports = {
  type: 'rotating-file',
  path: config.path || filePath,
  level: config.levels.file,
  period: '1d', // daily rotation
  count: 3      // keep 3 back copies
}
