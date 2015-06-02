var env = process.env.NODE_ENV || 'development'
var consoleTransport = require('./console')
var localFileTransport = require('./localFile')
var sentryTransport = require('./sentry')
var logglyTransport = require('./loggly')
// var s3Transport = require('./s3')

var transports = {
  development: [
    consoleTransport,
    localFileTransport
  ],
  test: [],
  staging: [
    consoleTransport,
    logglyTransport,
    sentryTransport
  ],
  production: [
    consoleTransport,
    logglyTransport,
    sentryTransport
  ]
}

module.exports = {
  transports: transports[env],
  exceptionHandlers: [
    sentryTransport
  ]
}
