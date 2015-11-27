const config = require('config')

/* istanbul ignore next */
const appName = process.env.npm_package_name || 'default'

const configDefaults = {
  levels: {
    console: 'info',
    file: 'debug',
    sentry: 'error',
    loggly: 'info'
  },
  domain: 'pager',
  buffers: 1,
  path: `/var/log/${appName}.log`,
  period: '1d',
  count: 3
}

exports.setDefaults = () => {
  config.util.setModuleDefaults('log', configDefaults)
}
