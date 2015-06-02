/* global after, it, describe */
var logger = require('../')
var fs = require('fs')
var localFileTransport = require('winston').transports.File
var expect = require('chai').expect

describe('Logger Require', function () {

  it('should export properly', function (done) {
    expect(logger).to.be.an('object')
    done()
  })

  it('should have no transports for test', function (done) {
    expect(logger.transports).to.be.an('object')
    expect(logger.transports).to.be.empty
    done()
  })

  it('should allow to add a transport', function (done) {
    logger.add(localFileTransport, { name: 'localFile', filename: 'test.log' })
    expect(logger.transports).to.be.an('object')
    expect(logger.transports).to.include.keys('localFile')
    expect(logger.transports.localFile).to.be.an('object')
    done()
  })

  it('should write to a localfile transport', function (done) {
    logger.log('info', 'test')

    setTimeout(function () {
      fs.readFile('test.log', function (err, data) {
        expect(err).to.be.null
        var logMessage = JSON.parse(data.toString())

        expect(logMessage).to.include.keys(['level', 'message'])
        expect(logMessage.level).to.equal('info')
        expect(logMessage.message).to.equal('test')

        done()
      })
    }, 200)
  })

  after(function (done) {
    fs.unlink('test.log', done)
  })

})
