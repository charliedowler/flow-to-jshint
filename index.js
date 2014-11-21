var path = require('path');
module.exports = function(result) {
  var errors = result.errors;
  var parsed = [];
  errors.forEach(function(error) {
    error.message.forEach(function(message) {
      var report = {};
      report.error = {
        reason: message.descr.split('\n').join(' - '),
        code: message.code ? 'W' : 'E',
        character: message.start,
        line: message.line
      };
      report.file = message.path;
      parsed.push(report);
    });
  });
  return parsed;
};