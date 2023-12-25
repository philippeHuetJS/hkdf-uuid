'use strict'

var hkdf = require('..')
var assert = require('assert')

describe('hkdf(ikm)', function () {
  it('should require an argument', function () {
    var derived = hkdf.bind(null)

    assert.throws(derived, /The "ikm" argument.*required./)
  })

  it('should be of type string', function () {
    var derived = hkdf.bind(null, { prop: 'foo' })

    assert.throws(derived, /The "ikm" argument.*string./)
  })

  it('should generate a hkdf', function () {
    var derived = hkdf('foo')

    assert.ok(typeof derived === 'string')
    assert.deepStrictEqual(derived.length, 86)
  })
})
