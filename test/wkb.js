var geos = require('../');
var ref = require('ref');
var assert = require('assert');

describe('WKB', function() {

    it('should read a point', function(done) {
        var ptWKT = ref.allocCString("POINT(0 0)");
        var point = geos.GEOSWKTReader_read(geos.wkt_reader,ptWKT);
        var size = ref.alloc(ref.types.size_t,0);
        var ucharPtr = geos.GEOSWKBWriter_write(geos.wkb_writer,point,size);
        assert.equal(21,ref.deref(size));
        var new_geom = geos.GEOSWKBReader_read(geos.wkb_reader,ucharPtr,ref.deref(size));
        var cstring = geos.GEOSWKTWriter_write(geos.wkt_writer,new_geom);
        var wkt = ref.readCString(cstring);
        assert.equal(wkt,'POINT (0.0000000000000000 0.0000000000000000)');
        geos.GEOSFree(cstring);
        geos.GEOSGeom_destroy(point);
        geos.GEOSGeom_destroy(new_geom);
        done();
    });

    it('should read a line', function(done) {
        var lineWKT = ref.allocCString("LINESTRING(0 0,1 1,2 2)");
        var line = geos.GEOSWKTReader_read(geos.wkt_reader,lineWKT);
        var size = ref.alloc(ref.types.size_t,0);
        var ucharPtr = geos.GEOSWKBWriter_write(geos.wkb_writer,line,size);
        assert.equal(57,ref.deref(size));
        var new_geom = geos.GEOSWKBReader_read(geos.wkb_reader,ucharPtr,ref.deref(size));
        var cstring = geos.GEOSWKTWriter_write(geos.wkt_writer,new_geom);
        var wkt = ref.readCString(cstring);
        assert.equal(wkt,'LINESTRING (0.0000000000000000 0.0000000000000000, 1.0000000000000000 1.0000000000000000, 2.0000000000000000 2.0000000000000000)');
        geos.GEOSFree(cstring);
        geos.GEOSGeom_destroy(line);
        geos.GEOSGeom_destroy(new_geom);
        done();
    });

});
