var libgeos = require('./geos.js');
var ffi = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

module.exports = libgeos;

Object.keys(libgeos.api).forEach(function(key) {
    libgeos[key] = libgeos.api[key];
});

libgeos.init = function(warning_cb,error_cb) {
  var warning_handler = ffi.Callback('void', ['string','string'], warning_cb);
  var error_handler = ffi.Callback('void', ['string','string'], error_cb);
  libgeos.api.initGEOS(warning_handler,error_handler);
}
