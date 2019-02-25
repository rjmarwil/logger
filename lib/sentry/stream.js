'use strict';

const Stream = require('stream');
const Sentry = require('@sentry/node');

module.exports = new Stream.Writable({
    write: (chunk, encoding, next) => {

        try {
            Sentry.captureEvent(JSON.parse(chunk.toString()));
        }
        catch (err) {
            console.error('Error writing sentry stream!');
            console.error(err);
        }

        next();
    }
});
