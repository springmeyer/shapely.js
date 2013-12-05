var geos = require('../');
var ref = require('ref');
var assert = require('assert');

describe('WKT', function() {

    it('should read a point', function(done) {
        var ptWKT = ref.allocCString("POINT(0 0)");
        var point = geos.GEOSWKTReader_read(geos.wkt_reader,ptWKT);
        var cstring = geos.GEOSWKTWriter_write(geos.wkt_writer,point);
        var wkt = ref.readCString(cstring);
        assert.equal(wkt,'POINT (0.0000000000000000 0.0000000000000000)');
        geos.GEOSFree(cstring);
        geos.GEOSGeom_destroy(point);
        done();
    });

    it('should read a line', function(done) {
        var lineWKT = ref.allocCString("LINESTRING(0 0,1 1,2 2)");
        var line = geos.GEOSWKTReader_read(geos.wkt_reader,lineWKT);
        var cstring = geos.GEOSWKTWriter_write(geos.wkt_writer,line);
        var wkt = ref.readCString(cstring);
        assert.equal(wkt,'LINESTRING (0.0000000000000000 0.0000000000000000, 1.0000000000000000 1.0000000000000000, 2.0000000000000000 2.0000000000000000)');
        geos.GEOSFree(cstring);
        geos.GEOSGeom_destroy(line);
        done();
    });

});
