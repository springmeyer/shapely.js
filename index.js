var ffi = require("ffi");
var ref = require('ref');
var Struct = require('ref-struct');

// http://geos.osgeo.org/doxygen/geos__c_8h_source.html

var geos;
var GEOSGeometry = Struct({});
var GEOSGeometryPtr = ref.refType(GEOSGeometry);
var GEOSWKTReader = Struct({});
var GEOSWKTReaderPtr = ref.refType(GEOSWKTReader);
var GEOSWKTWriter = Struct({});
var GEOSWKTWriterPtr = ref.refType(GEOSWKTWriter);
var GEOSWKBReader = Struct({});
var GEOSWKBReaderPtr = ref.refType(GEOSWKBReader);
var GEOSWKBWriter = Struct({});
var GEOSWKBWriterPtr = ref.refType(GEOSWKBWriter);

var GEOSGeomTypes = {
  "GEOS_POINT":0,
  "GEOS_LINESTRING":1,
  "GEOS_LINEARRING":2,
  "GEOS_POLYGON":3,
  "GEOS_MULTIPOINT":4,
  "GEOS_MULTILINESTRING":5,
  "GEOS_MULTIPOLYGON":6,
  "GEOS_GEOMETRYCOLLECTION":7
};

var GEOSByteOrders = {
  "GEOS_WKB_XDR":0,
  "GEOS_WKB_NDR":1
};

var voidPtr = ref.refType(ref.types.void);
var charPtr = ref.refType(ref.types.char);
var ucharPtr = ref.refType(ref.types.uchar);
var sizetPtr = ref.refType(ref.types.size_t);

var geos = new ffi.Library("libgeos_c", {
        "GEOSversion": ["string",[]],
        "initGEOS": [ "void", ["pointer","pointer"] ],
        "finishGEOS": [ "void", [] ],
        "GEOSGeom_destroy": [ "void", [GEOSGeometryPtr]],
        "GEOSFree": ["void", ["pointer"]],
        // WKT
        "GEOSWKTReader_create":[GEOSWKTReaderPtr,[ ]],
        "GEOSWKTReader_destroy":["void",[GEOSWKTReaderPtr]],
        "GEOSWKTReader_read":[GEOSGeometryPtr,[GEOSWKTReaderPtr,ref.types.CString]],
        "GEOSWKTWriter_create":[GEOSWKTWriterPtr,[ ]],
        "GEOSWKTWriter_destroy":["void",[GEOSWKTWriterPtr]],
        "GEOSWKTWriter_write":[charPtr,[GEOSWKTWriterPtr,GEOSGeometryPtr]],
        // WKB
        "GEOSWKBReader_create":[GEOSWKBReaderPtr,[ ]],
        "GEOSWKBReader_destroy":["void",[GEOSWKBReaderPtr]],
        "GEOSWKBReader_read":[GEOSGeometryPtr,[GEOSWKBReaderPtr,ucharPtr,ref.types.size_t]],
        "GEOSWKBWriter_create":[GEOSWKBWriterPtr,[ ]],
        "GEOSWKBWriter_destroy":["void",[GEOSWKBWriterPtr]],
        "GEOSWKBWriter_write":[ucharPtr,[GEOSWKBWriterPtr,GEOSGeometryPtr,sizetPtr]],
        // Linear referencing
        "GEOSInterpolateNormalized": [GEOSGeometryPtr,[GEOSGeometryPtr,ref.types.double]],
        "GEOSInterpolate": [GEOSGeometryPtr,[GEOSGeometryPtr,ref.types.double]]
});
module.exports = geos;

geos.init = function(warning_cb,error_cb) {
  var warning_handler = ffi.Callback('void', ['string','string'], warning_cb);
  var error_handler = ffi.Callback('void', ['string','string'], error_cb);
  geos.initGEOS(warning_handler,error_handler);
}

process.on('exit',function(code) {
  geos.finishGEOS();
});
