/**
 * Suppress missing config warnings.
 * See: https://github.com/lorenwest/node-config/wiki/Sub-Module-Configuration
 */
process.env.SUPPRESS_NO_CONFIG_WARNING = 'y'

module.exports = require('./lib/logger')
