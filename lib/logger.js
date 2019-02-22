'use strict';

const Pino = require('pino');
const Noir = require('pino-noir');

const internals = {
    defaults: {
        level: 'info',
        messageKey: 'data'
    },
    noirDefaults: [
        'password',
        'token',
        'authorization',
        'Authorization',
        'encryptedPassword',
        'bearerToken',
        'client_id',
        'client_secret',
        'refreshcode'
    ]
};

const createLogger = exports.createLogger = (pinoOptions = {}, destination) => {

    const noirConfig = (pinoOptions.noir || []).concat(internals.noirDefaults);

    const config = {
        ...internals.defaults,
        ...{ serializers: Noir(noirConfig) },
        ...pinoOptions
    };

    return new Pino(config, destination);
};

exports.logger = exports.default = createLogger();
