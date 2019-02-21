'use strict';

// Load modules

const { logger: Logger } = require('../lib');
const Code = require('code');
const Lab = require('lab');
const Stream = require('stream');

const internals = {};

// Test shortcuts

const lab = exports.lab = Lab.script();
const { afterEach, beforeEach, it, describe } = lab;
const expect = Code.expect;

describe('Logger', () => {

    beforeEach(() => {

        internals.queue = [];
        internals.destinationStream = new Stream.Writable({
            write: (chunk, encoding, next) => {

                internals.queue.push(JSON.parse(chunk.toString()));
                next();
            }
        });
    });

    afterEach(() => {

        delete internals.queue;
    });

    it('should redact default fields with custom logger', () => {

        const logger = Logger.createLogger({}, internals.destinationStream);
        logger.info({ password: 'my secret', other: 'asdf' }, 'a message');
        expect(internals.queue).to.have.length(1);
        expect(internals.queue[0].password).to.equal('[Redacted]');
        expect(internals.queue[0].other).to.equal('asdf');
        expect(internals.queue[0].data).to.equal('a message');
    });

    it('should redact configured fields', () => {

        const logger = Logger.createLogger({ noir: ['some-secret'] }, internals.destinationStream);
        logger.info({ password: 'my secret', other: 'asdf', 'some-secret': '12345' });
        expect(internals.queue).to.have.length(1);
        expect(internals.queue[0].password).to.equal('[Redacted]');
        expect(internals.queue[0]['some-secret']).to.equal('[Redacted]');
        expect(internals.queue[0].other).to.equal('asdf');
    });
});
