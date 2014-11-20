## flow-to-jshint [![Build Status][travis-image]][travis-url]

> Convert [Facebook's Flow](http://flowtype.org/) report to JSHint

## Installation
```shell
$ npm install --save flow-to-jshint
```

### Usage

```js
var report = getMyFlowReport();
var flowToJSHint = require('flow-to-jshint');
console.log(flowToJSHint(report));
// =>
[ { error:
     { reason: 'number - This type is incompatible with',
       code: 'E',
       character: 20,
       line: 3 },
    file: 'hello.js' },
  { error:
    { reason: 'string',
       code: 'E',
       character: 11,
       line: 3 },
    file: 'hello.js' }
]
```

[travis-url]: http://travis-ci.org/charliedowler/flow-to-jshint
[travis-image]: https://secure.travis-ci.org/charliedowler/flow-to-jshint.png?branch=master
