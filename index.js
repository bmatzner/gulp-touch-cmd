'use strict';

var fs = require('graceful-fs');
var through = require('through2');

module.exports = function() {
  return through.obj(function(file, enc, cb) {
    var fileDate = new Date();

    return fs.utimes(file.path, fileDate, fileDate, cb);
  });
};
