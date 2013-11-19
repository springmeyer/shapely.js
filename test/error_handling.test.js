var geos = require('../');
var ref = require('ref');
var assert = require('assert');

describe('Error Handling', function() {
    var wkt_reader;
    var error_result;
    var warning_result;

    before(function(done) {
        geos.init(
            function(arg1,arg2) { warning_result = arg2; } ,
            function(arg1,arg2) { error_result = arg2; } );
        wkt_reader = geos.GEOSWKTReader_create();
        done();
    });

    after(function(done) {
        geos.GEOSWKTReader_destroy(wkt_reader);
        done();
    });

    it('should handle errors correctly', function(done) {
        var line = geos.GEOSWKTReader_read(wkt_reader,"LINESTRING(0 0,");
        assert.equal(line.isNull(),true);
        assert.equal(error_result,'ParseException: Expected number but encountered end of stream');
        done();
    });

});
