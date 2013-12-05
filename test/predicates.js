var geos = require('../');
var ref = require('ref');
var assert = require('assert');

describe('Geometry Predicates', function() {

    it('Intersects', function(done) {
        var lineWKT = ref.allocCString("LINESTRING(0 0,1 1,2 2,4 4)");
        var line = geos.GEOSWKTReader_read(geos.wkt_reader,lineWKT);
        var lineWKT2 = ref.allocCString("LINESTRING(4 4,2 2,1 1,0 0)");
        var line2 = geos.GEOSWKTReader_read(geos.wkt_reader,lineWKT2);
        // Binary predicates - return 2 on exception, 1 on true, 0 on false
        var result = geos.GEOSIntersects(line,line2);
        assert.equal(result,1);
        geos.GEOSGeom_destroy(line);
        geos.GEOSGeom_destroy(line2);
        done();
    });

});
