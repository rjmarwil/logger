'use strict';

// Load modules

const Plugin = require('../lib/plugin');
const Logger = require('../lib/logger');
const Code = require('code');
const Hapi = require('hapi');
const Lab = require('lab');
const Stream = require('stream');

const internals = {};

// Test shortcuts

const lab = exports.lab = Lab.script();
const { afterEach, beforeEach, it, describe } = lab;
const expect = Code.expect;

describe('Plugin', () => {

    beforeEach(async () => {

        const server = new Hapi.Server();
        const queue = [];
        const destinationStream = new Stream.Writable({
            write: (chunk, encoding, next) => {

                queue.push(JSON.parse(chunk.toString()));
                next();
            }
        });
        const instance = Logger.configureNew({}, destinationStream);
        await server.register({
            plugin: Plugin,
            options: {
                instance,
                pino: {
                    ignorePaths: ['/stanky-leg']
                }
            }
        });
        server.route([
            {
                method: 'GET',
                path: '/',
                handler: (request, h) => {

                    request.log(['info'], 'this is a request log');
                    return {};
                }
            },
            {
                method: 'GET',
                path: '/throw',
                handler: (request, h) => {

                    throw new Error('some error');
                }
            },
            {
                method: 'GET',
                path: '/throw-promise',
                handler: async (request, h) => {

                    await Promise.reject(new Error('some rejection'));
                }
            },
            {
                method: 'GET',
                path: '/stanky-leg',
                handler: (request, h) => {

                    return {};
                }
            }
        ]);

        await server.start();
        internals.server = server;
        internals.queue = queue;
    });

    afterEach(async () => {

        delete internals.queue;
        await internals.server.stop();
    });

    it('should log a server request', () => {

        internals.server.log(['info'], 'test');
        expect(internals.queue).to.have.length(2); // server start log
        expect(internals.queue[1].data).to.equal('test');
    });

    it('should log a request', async () => {

        const request = {
            method: 'GET',
            url: '/'
        };
        const response = await internals.server.inject(request);

        expect(response.statusCode).to.equal(200);
        expect(internals.queue).to.have.length(3); // request complete log
        expect(internals.queue[1].data).to.equal('this is a request log');
    });

    it('should log an error', async () => {

        const request = {
            method: 'GET',
            url: '/throw'
        };
        const response = await internals.server.inject(request);

        expect(response.statusCode).to.equal(500);
        expect(internals.queue).to.have.length(3);
        expect(internals.queue[1].err.message).to.equal('some error');
        expect(internals.queue[1].err.stack).to.exist();
    });

    it('should log an error', async () => {

        const request = {
            method: 'GET',
            url: '/throw-promise'
        };
        const response = await internals.server.inject(request);

        expect(response.statusCode).to.equal(500);
        expect(internals.queue).to.have.length(3);
        expect(internals.queue[1].err.message).to.equal('some rejection');
        expect(internals.queue[1].err.stack).to.exist();
    });

    it('should not log ignored paths', async () => {

        const request = {
            method: 'GET',
            url: '/stanky-leg'
        };
        const response = await internals.server.inject(request);

        expect(response.statusCode).to.equal(200);
        expect(internals.queue).to.have.length(1);
    });

    it('should use default logger if none supplied without error', async () => {

        const server = new Hapi.Server();
        await server.register(Plugin);
        server.log(['info'], 'stdout log');
    });
});
