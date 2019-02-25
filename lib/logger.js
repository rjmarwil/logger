'use strict';

const Pino = require('pino');

const internals = {
    defaults: {
        level: 'info',
        messageKey: 'data',
        redact: [
            'body.data.key',
            'body.data.secret',
            'data.body.token',
            'encryptedPassword',
            'event.token',
            'headers.authorization',
            'headers.Authorization',
            'message.payload.token',
            'message.token',
            'password',
            'req.headers.authorization',
            'req.headers.Authorization',
            'requestPayload.authCode',
            'requestPayload.password',
            'requestPayload.user.password',
            'responsePayload.token',
            'token'
        ]
    }
};

const createLogger = exports.createLogger = (pinoOptions = {}, destination) => {

    pinoOptions.redact = (pinoOptions.redact || []).concat(internals.defaults.redact);
    const config = {
        ...internals.defaults,
        ...pinoOptions
    };

    if (pinoOptions.prettyPrint === undefined && process.env.NODE_ENV !== 'production') {
        config.prettyPrint = true;
    }

    return new Pino(config, destination);
};

exports.logger = exports.default = createLogger();
