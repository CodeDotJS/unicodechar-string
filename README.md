## unicodechar-string [![Build Status](https://travis-ci.org/CodeDotJS/unicodechar-string.svg?branch=master)](https://travis-ci.org/CodeDotJS/unicodechar-string)

> Convert unicode escape sequence to a character!

## Install

```
$ npm install --save unicodechar-string
```

## Usage

```js

const unicodestring = require('unicodechar-string');

const str = unicodestring('I wish I were a \ud83e\udd84, so I could stab idiots with my head!');

console.log(str)
// => 'I wish I were a 🦄, so I could stab idiots with my head!'

```

## License

MIT &copy; [Rishi Giri](http://rishigiri.ml)
