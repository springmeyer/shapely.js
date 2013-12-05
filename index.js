var lgeos = require('./geos.js');
var ffi = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

module.exports = lgeos;

Object.keys(lgeos.api).forEach(function(key) {
    lgeos[key] = lgeos.api[key];
});

lgeos.init = function(warning_cb,error_cb) {
  var warning_handler = ffi.Callback('void', ['string','string'], warning_cb);
  var error_handler = ffi.Callback('void', ['string','string'], error_cb);
  lgeos.api.initGEOS(warning_handler,error_handler);
}

lgeos.init(console.log,function(msg1,msg2) { throw new Error(msg2); });

lgeos.wkt_reader = lgeos.GEOSWKTReader_create();
lgeos.wkt_writer = lgeos.GEOSWKTWriter_create();
lgeos.wkb_reader = lgeos.GEOSWKBReader_create();
lgeos.wkb_writer = lgeos.GEOSWKBWriter_create();

process.on('exit',function(code) {
    lgeos.GEOSWKTReader_destroy(lgeos.wkt_reader);
    lgeos.GEOSWKTWriter_destroy(lgeos.wkt_writer);
    lgeos.GEOSWKBReader_destroy(lgeos.wkb_reader);
    lgeos.GEOSWKBWriter_destroy(lgeos.wkb_writer);
    lgeos.finishGEOS();
});
