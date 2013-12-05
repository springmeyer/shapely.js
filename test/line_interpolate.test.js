var geos = require('../');
var ref = require('ref');
var assert = require('assert');

describe('Line Interpolation', function() {

    it('should return point along line', function(done) {
        var lineWKT = ref.allocCString("LINESTRING(0 0,1 1,2 2,4 4)");
        var line = geos.GEOSWKTReader_read(geos.wkt_reader,lineWKT);
        var point = geos.GEOSInterpolateNormalized(line,0.5);
        var cstring = geos.GEOSWKTWriter_write(geos.wkt_writer,point);
        var wkt = ref.readCString(cstring);
        assert.equal(wkt,'POINT (2.0000000000000000 2.0000000000000000)');
        geos.GEOSGeom_destroy(point);
        geos.GEOSGeom_destroy(line);
        done();
    });

});
