var geos = require('../');
var ref = require('ref');
var assert = require('assert');

describe('Line interpolate', function() {
    var wkt_reader;
    var wkt_writer;

    before(function(done) {
        wkt_reader = geos.GEOSWKTReader_create();
        wkt_writer = geos.GEOSWKTWriter_create();
        done();
    });

    after(function(done) {
        geos.GEOSWKTReader_destroy(wkt_reader);
        geos.GEOSWKTWriter_destroy(wkt_writer);
        done();
    });

    it('should result in point at line midpoint', function(done) {
        var line = geos.GEOSWKTReader_read(wkt_reader,"LINESTRING(0 0,1 1,2 2,4 4)");
        var point = geos.GEOSInterpolateNormalized(line,0.5);
        var cstring = geos.GEOSWKTWriter_write(wkt_writer,point);
        var wkt = ref.readCString(cstring);
        assert.equal(wkt,'POINT (2.0000000000000000 2.0000000000000000)');
        geos.GEOSGeom_destroy(point);
        geos.GEOSGeom_destroy(line);
        done();
    });

});
