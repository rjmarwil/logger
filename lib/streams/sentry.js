'use strict'

const Raven = require('raven')
const Stream = require('bunyan-raven')

exports.init = (config) => {
  Raven.config(process.env.SENTRY_DSN, { autoBreadcrumbs: true })

  // https://docs.sentry.io/clients/node/usage/#global-fatal-error-handler
  /* istanbul ignore next */
  if (config.patchGlobal) {
    Raven.install((err) => {
      console.error(err.stack)
      process.exit(1)
    })
  }

  return {
    type: 'raw',
    name: 'sentry',
    stream: new Stream(Raven),
    level: config.levels.sentry || 'error'
  }
}
