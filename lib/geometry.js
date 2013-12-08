var lgeos = require('../');
var ref = require('ref'),
    weak = require('weak')
    util = require("util");

function cleanup(o) {
    if (o.geom && !o.geom.isNull()) lgeos.GEOSGeom_destroy(o.geom);
}

function BaseGeom(geom) {
    if (!geom) throw new Error("BaseGeom must be created with reference to geos.geometry");
    this.geom = geom;
}

BaseGeom.prototype.to_wkt = function() {
    return ref.readCString(lgeos.GEOSWKTWriter_write(lgeos.wkt_writer,this.geom));
}

BaseGeom.prototype.area = function() {
    var area = ref.alloc(ref.types.double,0);
    lgeos.GEOSArea(this.geom,area);
    return area.deref();
}

BaseGeom.prototype.buffer = function(val, resolution) {
    return new BaseGeom(lgeos.GEOSBuffer(this.geom, val, resolution || 16));
}


var Point = function(x,y,z) {
    if (arguments.length == 1) {
        this._init(arguments[0]);
    } else {
        this._init(Array.prototype.slice.call(arguments));
    }
}

util.inherits(Point, BaseGeom);
module.exports.BaseGeom = BaseGeom;
module.exports.Point = Point;

Point.prototype._init = function(coords) {
    this.cs = lgeos.GEOSCoordSeq_create(1, 2);
    if (this.cs.isNull()) { throw new Error("could not create  coordinate sequence"); }
    lgeos.GEOSCoordSeq_setX(this.cs, 0, coords[0]);
    lgeos.GEOSCoordSeq_setY(this.cs, 0, coords[1]);
    this.geom = lgeos.GEOSGeom_createPoint(this.cs);
    if (!this.geom || this.geom.isNull()) {
        lgeos.GEOSCoordSeq_destroy(this.cs);
        throw new Error("could not create geometry from coordinate sequence");
    }
    Point.super_(this.geom);
    weak(this,cleanup);
}