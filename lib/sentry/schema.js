'use strict';

const { Severity } = require('@sentry/node');
const Joi = require('joi');

const internals = {
    levels: Object.values(Severity).filter((level) => typeof level === 'string')
        || ['fatal', 'error', 'warning', 'log', 'info', 'debug', 'critical']
};

module.exports = Joi.object().keys({
    baseUri: Joi.string().uri(),
    channels: Joi.array().items(Joi.string().only(internals.levels)).single().default('error'),
    trackUser: Joi.boolean().default(true),
    scope: Joi.object().keys({
        tags: Joi.array().items(Joi.object().keys({
            name: Joi.string().required(),
            value: Joi.any().required()
        })),
        level: Joi.string().only(internals.levels),
        extra: Joi.object()
    }),
    client: Joi.object().keys({
        dsn: Joi.string().uri().allow(false).required(),
        debug: Joi.boolean(),
        release: Joi.string(),
        environment: Joi.string(),
        sampleRate: Joi.number().min(0).max(1),
        maxBreadcrumbs: Joi.number().integer(),
        attachStacktrace: Joi.any(),
        sendDefaultPii: Joi.boolean(),
        serverName: Joi.string(),
        beforeSend: Joi.func(),
        beforeBreadcrumb: Joi.func()
    }).required()
});
