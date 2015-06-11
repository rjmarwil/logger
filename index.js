var path = require('path')
var config = require('config')

/**
 * Suppress missing config warnings.
 * See: https://github.com/lorenwest/node-config/wiki/Sub-Module-Configuration
 */
process.env.SUPPRESS_NO_CONFIG_WARNING = 'y'

var appName = process.env.npm_package_name || 'default'

var configDefaults = {
  levels: {
    console: 'info',
    file: 'debug',
    sentry: 'error',
    loggly: 'info'
  },
  domain: 'pager',
  buffers: 1,
  path: path.join('/var/log', appName + '.log'),
  period: '1d',
  count: 3
}

module.exports = (function () {
  config.util.setModuleDefaults('log', configDefaults)
  return require('./lib/logger')
})()
