'use strict'

const Raven = require('raven')
const Stream = require('bunyan-raven')
const config = require('config').get('log')

Raven.config(process.env.SENTRY_DSN, { autoBreadcrumbs: true })

/* istanbul ignore next */
if (config.patchGlobal) {
  Raven.install()
}

module.exports = {
  type: 'raw',
  stream: new Stream(Raven),
  level: config.levels.sentry || 'error'
}
