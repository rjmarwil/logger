'use strict'

const log = require('../')

// Basic usage:

log.info('ohai console!', { info: 'some thoughts' })

// The raven serializer automatically logs any error passed in the 'err' key of the log record.

const err = new Error('ruh-roh')

log.error('this gets submitted into sentry', { err: err })
log.error(new Error("This gets picked up by Bunyan's serializer"))

// Alternatively, it will create a new Error object with the log record's message.

log.error({ myCustomField: 'I like turtles' }, 'error message')

log.fatal({ err: new Error('catastrophic!') }, 'fatal with obj!')

// levels

log.trace('hello trace!')
log.debug('hello debug!')
log.info('hello info!')

log.warn({ foo: 'bar' }, 'hello warn!')

