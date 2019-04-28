'use strict';

var fs = require('graceful-fs');
var through = require('through2');

module.exports = function() {
  return through.obj(function(file, enc, cb) {
    var fileDate = new Date();
    fs.utimes(file.path, fileDate, fileDate, function(){});
    return cb(null, file);
  });
};
