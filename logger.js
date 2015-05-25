var winston = require('winston')
  , SentryLogger = require('./transports/sentry');

var transports = require('./transports');

var logger = new (winston.Logger)({
  transports: transports
  , exceptionHandlers: [
    SentryLogger
  ]
});

module.exports = logger;
