'use strict'

exports.init = (config) => {
  return {
    name: 'stdout',
    stream: process.stdout,
    level: config.levels.console
  }
}
