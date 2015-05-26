var Loggly = require('winston-loggly').Loggly
  , config = require('config')
  , levels = config.get('log').levels
  , env = process.env.NODE_ENV || 'development'
  , appName = process.env.npm_package_name || 'default';

module.exports = new (Loggly)(
  { subdomain: 'pagerinc'
  , level: levels.loggly || 'debug'
  , json: true
  , inputName: appName + '@' + env
  , inputToken: process.env.LOGGLY_TOKEN || 'Don\'t forget the token'
  , tags: [appName, env]
  }
);
