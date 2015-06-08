var Loggly = require('winston-loggly').Loggly
var config = require('config').get('log')
var env = process.env.NODE_ENV || 'development'
var appName = process.env.npm_package_name || 'default'

module.exports = new (Loggly)({
  subdomain: config.domain || 'pager',
  level: config.levels.loggly || 'debug',
  json: true,
  inputName: appName + '@' + env,
  inputToken: process.env.LOGGLY_TOKEN,
  tags: [appName, env],
  stripColors: true
})
