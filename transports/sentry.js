var SentryLogger = require('winston-sentry')
  , config = require('config')
  , levels = config.get('log').levels;

var sentry = new (SentryLogger)(
  { dsn: process.env.SENTRY_DSN
  , level: levels.sentry || 'error'
  }
);

module.exports = sentry;
