'use strict';

const Pino = require('pino');

const internals = {
    defaults: {
        level: 'info'
    }
};

const configureNew = exports.configureNew = (pinoOptions, destination) => {

    const config = Object.assign({}, pinoOptions, internals.defaults);
    return new Pino(config, destination);
};

exports.default = configureNew();
