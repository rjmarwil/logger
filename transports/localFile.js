var winston = require('winston')
var config = require('config')
var path = require('path')
var levels = config.get('log').levels
var appName = process.env.npm_package_name || 'default'

var localFile = new (winston.transports.File)({
  filename: path.join('./logs', appName + '-all.log'),
  handleExceptions: true,
  json: true,
  maxsize: 5242880, // 5MB
  maxFiles: 5,
  colorize: false,
  level: levels.file || 'info'
})

module.exports = localFile
