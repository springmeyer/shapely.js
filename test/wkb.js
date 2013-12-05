var geos = require('../');
var ref = require('ref');
var assert = require('assert');

describe('WKB', function() {
    var wkt_reader;
    var wkt_writer;
    var wkb_reader;
    var wkb_writer;

    before(function(done) {
        geos.init(console.warn,console.error);
        wkt_reader = geos.GEOSWKTReader_create();
        wkt_writer = geos.GEOSWKTWriter_create();
        wkb_reader = geos.GEOSWKBReader_create();
        wkb_writer = geos.GEOSWKBWriter_create();
        done();
    });

    after(function(done) {
        geos.GEOSWKTReader_destroy(wkt_reader);
        geos.GEOSWKTWriter_destroy(wkt_writer);
        geos.GEOSWKBReader_destroy(wkb_reader);
        geos.GEOSWKBWriter_destroy(wkb_writer);
        done();
    });

    it('should read a point', function(done) {
        var ptWKT = ref.allocCString("POINT(0 0)");
        var point = geos.GEOSWKTReader_read(wkt_reader,ptWKT);
        var size = ref.alloc(ref.types.size_t,0);
        var ucharPtr = geos.GEOSWKBWriter_write(wkb_writer,point,size);
        assert.equal(21,ref.deref(size));
        var new_geom = geos.GEOSWKBReader_read(wkb_reader,ucharPtr,ref.deref(size));
        var cstring = geos.GEOSWKTWriter_write(wkt_writer,new_geom);
        var wkt = ref.readCString(cstring);
        assert.equal(wkt,'POINT (0.0000000000000000 0.0000000000000000)');
        geos.GEOSFree(cstring);
        geos.GEOSGeom_destroy(point);
        geos.GEOSGeom_destroy(new_geom);
        done();
    });

    it('should read a line', function(done) {
        var lineWKT = ref.allocCString("LINESTRING(0 0,1 1,2 2)");
        var line = geos.GEOSWKTReader_read(wkt_reader,lineWKT);
        var size = ref.alloc(ref.types.size_t,0);
        var ucharPtr = geos.GEOSWKBWriter_write(wkb_writer,line,size);
        assert.equal(57,ref.deref(size));
        var new_geom = geos.GEOSWKBReader_read(wkb_reader,ucharPtr,ref.deref(size));
        var cstring = geos.GEOSWKTWriter_write(wkt_writer,new_geom);
        var wkt = ref.readCString(cstring);
        assert.equal(wkt,'LINESTRING (0.0000000000000000 0.0000000000000000, 1.0000000000000000 1.0000000000000000, 2.0000000000000000 2.0000000000000000)');
        geos.GEOSFree(cstring);
        geos.GEOSGeom_destroy(line);
        geos.GEOSGeom_destroy(new_geom);
        done();
    });

});
