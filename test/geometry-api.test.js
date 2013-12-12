var Point = require('../').Point;
var assert = require('assert');

describe('Geometry API', function() {

    it('create a Point', function(done) {
        assert.equal(new Point(0,0).to_wkt(), 'POINT (0.0000000000000000 0.0000000000000000)');
        assert.equal(new Point(0,0).area(),0);
        done();
    });

    it('buffer a Point', function(done) {
        var diff = Math.abs(new Point(0,0).buffer(10).area() - 313.6548490545939);
        assert.ok(diff < 0.0001);
        done();
    });

});
