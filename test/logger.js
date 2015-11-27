'use strict'

const expect = require('chai').expect
const logger = require('../')

describe('Logger', () => {
  it('exports a logger', (done) => {
    expect(logger).to.respondTo('info')
    done()
  })
})
