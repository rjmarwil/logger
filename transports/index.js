var env = process.env.NODE_ENV || 'development'
  , consoleTransport = require('./console')
  , localFileTransport = require('./localFile')
  , sentryTransport = require('./sentry')
  , logglyTransport = require('./loggly')
  , s3Transport = require('./s3');

var transports = {
  development: [consoleTransport, localFileTransport],
  test: [],
  staging: [consoleTransport, s3Transport, sentryTransport],
  production: [consoleTransport, s3Transport, sentryTransport]
};

module.exports = transports[env];
