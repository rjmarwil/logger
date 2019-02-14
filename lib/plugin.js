'use strict';

const Logger = require('./logger');
const HapiPino = require('hapi-pino');

const internals = {
    defaults: {
        ignorePaths: ['/health', '/healthcheck', '/metrics', '/']
    }
};

module.exports = {
    pkg: require('../package.json'),
    register: async (server, options) => {

        const instance = options.instance || Logger.default;
        const pinoOpts = Object.assign({}, internals.defaults, { instance }, options.pino);
        await HapiPino.register(server, pinoOpts);
    }
};
