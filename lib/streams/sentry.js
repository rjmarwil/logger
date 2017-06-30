'use strict'

const Raven = require('raven')
const Stream = require('bunyan-raven')

exports.init = (config) => {
  Raven.config(process.env.SENTRY_DSN, { autoBreadcrumbs: true })

  // https://docs.sentry.io/clients/node/usage/#global-fatal-error-handler
  /* istanbul ignore next */
  if (config.patchGlobal) {
    Raven.install()
  }

  return {
    type: 'raw',
    name: 'sentry',
    stream: new Stream(Raven),
    level: config.levels.sentry || 'error'
  }
}
