'use strict';

const Stream = require('stream');

module.exports = (sentry) => {

    return new Stream.Writable({
        write: (chunk, encoding, next) => {

            try {
                sentry.captureEvent(JSON.parse(chunk.toString()));
            }
            catch (err) {
                console.error('Error writing sentry stream!');
                console.error(err);
            }

            next();
        }
    });
};
