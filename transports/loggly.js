var Loggly = require('winston-loggly').Loggly
var levels = require('config').get('log').levels
var env = process.env.NODE_ENV || 'development'
var appName = process.env.npm_package_name || 'default'

module.exports = new (Loggly)({
  subdomain: 'pagerinc',
  level: levels.loggly || 'debug',
  json: true,
  inputName: appName + '@' + env,
  inputToken: process.env.LOGGLY_TOKEN || 'Don\'t forget the token',
  tags: [appName, env]
})
