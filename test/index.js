'use strict'

var hkdf = require('..')
var assert = require('assert')

describe('hkdf', function () {
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
    assert.ok(derived.length > 0)
    assert.ok(/^[a-zA-Z0-9+/]+={0,2}$/.test(derived))
  })

  it('should generate many hkdf', function () {
    var derived1 = hkdf('foo')
    var derived2 = hkdf('foo')

    assert.notStrictEqual(derived1, derived2)
  })
})
