var Bunyan2Loggly = require('bunyan-loggly').Bunyan2Loggly

var config = require('config').get('log')

module.exports = {
  type: 'raw',
  stream: new Bunyan2Loggly({
    token: process.env.LOGGLY_TOKEN,
    subdomain: config.domain
  },
  config.buffers
  )
}
