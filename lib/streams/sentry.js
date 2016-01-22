'use strict'

const raven = require('raven')
const RavenStream = require('bunyan-raven')
const config = require('config').get('log')

const client = new raven.Client(process.env.SENTRY_DSN)

/* istanbul ignore next */
if (config.patchGlobal) {
  client.patchGlobal((err) => {
    console.error(err)
    process.exit(1)
  })
}

/* istanbul ignore next */
const level = config.levels.sentry || 'error'

module.exports = {
  type: 'raw',
  stream: new RavenStream(client),
  level: level
}
