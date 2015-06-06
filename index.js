/**
 * Suppress missing config warnings.
 * See: https://github.com/lorenwest/node-config/wiki/Sub-Module-Configuration
 */
process.env.SUPPRESS_NO_CONFIG_WARNING = 'y'

var config = require('config')

var myDefaultConfigs = require('./config/' + (process.env.NODE_ENV || 'default') + '.json')

module.exports = (function () {
  config.util.setModuleDefaults('log', myDefaultConfigs)
  return require('./lib/logger')
})()
