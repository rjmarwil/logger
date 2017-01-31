'use strict'

const bunyan = require('bunyan')
const config = require('config')

const streams = require('./streams')
const name = require(`${process.cwd()}/package.json`).name

const defaults = {
  patchGlobal: false,
  levels: {
    console: 'info',
    sentry: 'error'
  }
}

config.util.extendDeep(defaults, { log: {} })
config.util.setModuleDefaults('log', defaults)

module.exports = bunyan.createLogger({ name, streams })
