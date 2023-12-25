# hkdf-uuid

[![CI status](https://img.shields.io/github/actions/workflow/status/philippeHuetJS/hkdf-uuid/ci.yml)](https://github.com/philippeHuetJS/hkdf-uuid/actions)
[![MIT license](https://img.shields.io/github/license/philippeHuetJS/hkdf-uuid)](https://github.com/philippeHuetJS/hkdf-uuid/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/philippeHuetJS/hkdf-uuid)](https://github.com/philippeHuetJS/hkdf-uuid/releases)

Module to derive a passphrase

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm](https://www.npmjs.com/) registry.

```sh
$ npm install hkdf-uuid
```

## API

```js
var hkdf = require('hkdf-uuid')
```

TypeScript:

```typescript
import hkdf from 'hkdf-uuid'
```

### hkdf(key)

```js
var derived = hkdf('foo')
console.log(derived) // "1+WBK5bAZi9PUnt41d/HE8gmi7Krq5Ni7XObzaxICgypmeyhoeDipwv98P1bGjuyb0t2HaqAZE7Af6aYlh/ljg"
```

## Description

Derives a passphrase with SHA-512 digest. Returns a string in base64 format.

## Test

```sh
$ npm run test
```

## Documentation

Find [here](https://nodejs.org/en/docs/) the official documentation.

## License

[MIT](LICENSE)
