var winston = require('winston')
var S3StreamLogger = require('s3-streamlogger').S3StreamLogger
var config = require('config')
var env = process.env.NODE_ENV || 'development'
var appName = process.env.npm_package_name || 'default'
var levels = config.get('log').levels

var s3 = new (winston.transports.File)({
  stream: new S3StreamLogger({
    bucket: process.env.S3_LOGS_BUCKET || 'logs',
    access_key_id: process.env.S3_KEY,
    secret_access_key: process.env.S3_SECRET,
    name_format: '%Y-%m-%d-%H-%M-' + env + '-' + appName + '.log',
    max_file_size: 5242880, // 5MB
    upload_every: 20000, // 20 secs
    buffer_size: 10000, // buffer size
    level: levels.console || 'info'
  })
})

module.exports = s3
