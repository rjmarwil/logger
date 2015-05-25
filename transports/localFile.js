var winston = require('winston')
  , config = require('config')
  , path = require('path')
  , levels = config.get('log').levels
  , appName = process.env.npm_package_name || 'default';

var localFile = new (winston.transports.File)(
  { filename: path.join('./logs', appName + '-all.log')
  , handleExceptions: true
  , json: true
  , maxsize: 5242880 // 5MB
  , maxFiles: 5
  , colorize: false
  , level: levels.file || 'info'
});

module.exports = localFile;
