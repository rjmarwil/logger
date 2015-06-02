var env = process.env.NODE_ENV || 'development'
  , consoleTransport = require('./console')
  , localFileTransport = require('./localFile')
  , sentryTransport = require('./sentry')
  // , s3Transport = require('./s3');
  , logglyTransport = require('./loggly');

var transports = {
  development: [
    consoleTransport
    , localFileTransport
  ]
  , test: []
  , staging: [
    consoleTransport
    , logglyTransport
    , sentryTransport
  ]
  , production: [
    consoleTransport
    , logglyTransport
    , sentryTransport
  ]
};

module.exports = {
  transports: transports[env]
  , exceptionHandlers: [
    sentryTransport
  ]
};

