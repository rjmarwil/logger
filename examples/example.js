'use strict'

const log = require('../')

try {
  throw new TypeError('boom')
} catch (err) {
  log.warn({ err }, 'operation went boom: %s', err) // <--- will not be sent to Sentry
  log.error({ err }, 'this is a test: %s', err) // <--- Logs to stderr and Sentry
  log.info({ foo: 'bar' }, 'some trace')
}

throw new TypeError('uncaught err test') // <--- Gets caught by global `install`, reported, and exits the proc
