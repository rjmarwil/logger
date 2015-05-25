var winston = require('winston')
  , config = require('config')
  , levels = config.get('log').levels;

var console = new (winston.transports.Console)(
  { handleExceptions: true
  , json: false
  , colorize: true
  , level: levels.console || 'info'
});

module.exports = console;
