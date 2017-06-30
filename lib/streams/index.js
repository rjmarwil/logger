'use strict'

exports.init = (config) => {
  return [
    require('./console').init(config),
    require('./sentry').init(config)
  ]
}
