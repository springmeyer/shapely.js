var lgeos = require('../');
var Point = lgeos.Point;
var BaseGeom = lgeos.BaseGeom;
var assert = require('assert');
var util = require("util");
var weak = require('weak');

describe('Geometry API', function() {

    it('create a Point', function(done) {
        assert.equal(new Point(0,0).to_wkt(), 'POINT (0.0000000000000000 0.0000000000000000)');
        assert.equal(new Point(0,0).area(),0);
        done();
    });

    it('buffer a Point', function(done) {
        assert.equal(new Point(0,0).buffer(10).area(), 313.6548490545939);
        done();
    });

    it('should free geometry ptr inside a Geometry', function(done) {
        destroyed = false;
        function _cleanup(o) {
            destroyed = true;
            lgeos.GEOSCoordSeq_destroy(o.cs);
            lgeos.GEOSGeom_destroy(o.geom);
        }
        var NewGeomType = function(coords) {
            this._init(coords);
        };
        util.inherits(NewGeomType, BaseGeom);
        NewGeomType.prototype._init = function(coords) {
            this.cs = lgeos.GEOSCoordSeq_create(1, 2);
            lgeos.GEOSCoordSeq_setX(this.cs, 0, coords[0]);
            lgeos.GEOSCoordSeq_setY(this.cs, 0, coords[1]);
            this.geom = lgeos.GEOSGeom_createPoint(this.cs);
            NewGeomType.super_(this.geom);
            weak(this,_cleanup);
        }
        assert.equal(destroyed,false);
        // create temporary object
        var area = new NewGeomType([0,0]).area();
        assert.equal(area,0);
        // garbage collect now, resulting in cleanup of temporary
        gc()
        // ensure full cleanup
        assert.equal(destroyed,true);
        done();            
    });

});
