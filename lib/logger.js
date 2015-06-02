var winston = require('winston')

var transports = require('../transports')

module.exports = new (winston.Logger)(transports)
