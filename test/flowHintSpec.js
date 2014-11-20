var should = require('should');
var flowToJSHint = require('../');

var data = {
  "passed": false,
  "errors": [{
    "message": [{
      "descr": "string\nThis type is incompatible with",
      "code": 0,
      "path": "/Users/charlie/code/charliedowler/gulp-flow/node_modules/flow-bin/vendor/examples/01_HelloWorld/hello.js",
      "line": 7,
      "endline": 7,
      "start": 5,
      "end": 19
    }, {
      "descr": "number",
      "code": 0,
      "path": "/Users/charlie/code/charliedowler/gulp-flow/node_modules/flow-bin/vendor/examples/01_HelloWorld/hello.js",
      "line": 4,
      "endline": 4,
      "start": 10,
      "end": 13
    }]
  }],
  "version": " Nov 18 2014 22:26:40"
};

describe("convert flow to jshint", function () {
  it('should work', function () {
    var report = flowToJSHint(data);
    should.equal(report.length, 2);
  });
});