'use strict'

const config = require('config')

const configDefaults = {
  levels: {
    console: 'info',
    sentry: 'error'
  }
}

exports.setDefaults = () => {
  config.util.setModuleDefaults('log', configDefaults)
}
