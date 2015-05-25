var winston = require('winston')
  , config = require('config')
  , levels = config.get('log').levels
  , Loggly = require('winston-loggly').Loggly;

module.exports = new (Loggly)(
  { subdomain: 'pagerinc'
  , auth:
    { username: 'your-username'
    , password: 'your-password'
    }
  , level: levels.loggly || 'error'
  , json: true
  , inputName: 'The name of the input this instance should log to'
  , inputToken: 'The input token of the input this instance should log to'
  , tags: []
  }
);
