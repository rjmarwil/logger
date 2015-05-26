/*jshint expr: true*/
var logger = require('../')
  , expect = require('chai').expect;

describe('Enviroment Setup', function () {
  it('should have no transports for test', function (done) {
    expect(logger).to.be.an('object');
    expect(logger.transports).to.be.an('object');
    expect(logger.transports).to.be.empty;
    done();
  });
});
