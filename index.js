/*!
 * hkdf-uuid
 * Copyright(c) 2022 Philippe Huet
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

var crypto = require('crypto')

/**
 * Module exports.
 * @public
 */

module.exports = hkdf

/**
 * Function to generate a HKDF.
 *
 * @param {String} ikm - The passphrase to derive with SHA-512 digest.
 * @returns {String} - The derived passphrase in base64 format.
 * @throws {TypeError} - In case of invalid input.
 * @public
 */

function hkdf(ikm) {
  if (arguments.length === 0) {
    throw new TypeError('The "ikm" argument is required.')
  }

  if (!ikm || typeof ikm !== 'string') {
    throw new TypeError('The "ikm" argument must be a string.')
  }

  return Buffer.from(
    crypto.hkdfSync(
      'sha512',
      ikm,
      crypto.randomBytes(16),
      Buffer.from(crypto.randomUUID(), 'base64'),
      64
    )
  )
    .toString('base64')
    .replace(/=+$/, '')
}
