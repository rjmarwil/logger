var raven = require('raven')
var RavenStream = require('bunyan-raven')

var levels = require('config').get('log').levels

// uses process.env.SENTRY_DSN
var client = new raven.Client()

// Enable global-error catching on envs that actually use the client
if (process.env.SENTRY_DSN) {
  client.patchGlobal()
}

module.exports = {
  type: 'raw',
  stream: new RavenStream(client),
  level: levels.sentry || 'error'
}
