var winston = require('winston');

var transports = require(process.cwd() + '/transports');

module.exports = new (winston.Logger)(transports);
