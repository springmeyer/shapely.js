var geos = require('../');
var ref = require('ref');
var assert = require('assert');

describe('Error Handling', function() {
    var error_result;
    var warning_result;

    before(function(done) {
        geos.init(
            function(arg1,arg2) { warning_result = arg2; } ,
            function(arg1,arg2) { error_result = arg2; } );
        done();
    });

    it('should handle errors correctly', function(done) {
        var lineWKT = ref.allocCString("LINESTRING(0 0,");
        var line = geos.GEOSWKTReader_read(geos.wkt_reader,lineWKT);
        assert.equal(line.isNull(),true);
        assert.equal(error_result,'ParseException: Expected number but encountered end of stream');
        done();
    });

});
