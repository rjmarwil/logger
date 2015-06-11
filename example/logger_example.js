var log = require('../')

log.info('this should go into loggly', { info: 'some thoughts' })

// This goes straight into loggly
var err = new Error('ruh-roh')
log.info(err)

log.error('this should go into sentry', { err: err })

// levels

log.trace('hello trace!')
log.debug('hello debug!')
log.info('hello info!')
log.warn('hello warn!')
log.error('hello error!')
log.fatal('hello fatal!')

log.fatal({ err: err }, 'fatal with obj!')
log.error(new Error("This gets picked up by Bunyan's serializer"))
log.error({ myCustomField: 'I like turtles' }, 'error message')
