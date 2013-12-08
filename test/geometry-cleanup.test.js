var lgeos = require('../');
var BaseGeom = lgeos.BaseGeom;
var assert = require('assert');
var util = require("util");
var weak = require('weak');

describe('Geometry Cleanup', function() {

    it('should free geometry ptr inside a Geometry', function(done) {
        destroyed = false;
        function _cleanup(o) {
            destroyed = true;
            if (o.geom.isNull()) {
                lgeos.GEOSCoordSeq_destroy(o.cs);
            } else {
                // if geom was created it will have taken ownership of the seq
                lgeos.GEOSGeom_destroy(o.geom);
            }
        }
        var NewGeomType = function(coords) {
            this._init(coords);
        };
        util.inherits(NewGeomType, BaseGeom);
        NewGeomType.prototype._init = function(coords) {
            this.cs = lgeos.GEOSCoordSeq_create(1, 2);
            assert.equal(this.cs.isNull(),false);
            lgeos.GEOSCoordSeq_setX(this.cs, 0, coords[0]);
            lgeos.GEOSCoordSeq_setY(this.cs, 0, coords[1]);
            this.geom = lgeos.GEOSGeom_createPoint(this.cs);
            assert.equal(this.geom.isNull(),false);
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
