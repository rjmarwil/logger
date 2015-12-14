'use strict'

const config = require('config')

const configDefaults = {
  patchGlobal: false,
  levels: {
    console: 'info',
    sentry: 'error'
  }
}

exports.setDefaults = () => {
  config.util.setModuleDefaults('log', configDefaults)
}
