var FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

var voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {
};

var GEOSMessageHandler = exports.GEOSMessageHandler = FFI.Function(ref.types.void, [
  ref.refType(ref.types.char),
]);
var GEOSMessageHandlerPtr = exports.GEOSMessageHandlerPtr = ref.refType(GEOSMessageHandler);
var GEOSInterruptCallback = exports.GEOSInterruptCallback = voidPtr;
var GEOSInterruptCallbackPtr = exports.GEOSInterruptCallbackPtr = ref.refType(GEOSInterruptCallback);
var GEOSContextHandle_t = exports.GEOSContextHandle_t = voidPtr;
var GEOSContextHandle_tPtr = exports.GEOSContextHandle_tPtr = ref.refType(GEOSContextHandle_t);
var GEOSGeometry = exports.GEOSGeometry = voidPtr;
var GEOSGeometryPtr = exports.GEOSGeometryPtr = ref.refType(GEOSGeometry);
var size_t = exports.size_t = voidPtr;
var size_tPtr = exports.size_tPtr = ref.refType(size_t);
var GEOSCoordSequence = exports.GEOSCoordSequence = voidPtr;
var GEOSCoordSequencePtr = exports.GEOSCoordSequencePtr = ref.refType(GEOSCoordSequence);
var GEOSBufferParams = exports.GEOSBufferParams = voidPtr;
var GEOSBufferParamsPtr = exports.GEOSBufferParamsPtr = ref.refType(GEOSBufferParams);
var GEOSPreparedGeometry = exports.GEOSPreparedGeometry = voidPtr;
var GEOSPreparedGeometryPtr = exports.GEOSPreparedGeometryPtr = ref.refType(GEOSPreparedGeometry);
var GEOSSTRtree = exports.GEOSSTRtree = voidPtr;
var GEOSSTRtreePtr = exports.GEOSSTRtreePtr = ref.refType(GEOSSTRtree);
var GEOSQueryCallback = exports.GEOSQueryCallback = FFI.Function(ref.types.void, [
  voidPtr,
  voidPtr,
]);
var GEOSQueryCallbackPtr = exports.GEOSQueryCallbackPtr = ref.refType(GEOSQueryCallback);
var GEOSWKTReader = exports.GEOSWKTReader = voidPtr;
var GEOSWKTReaderPtr = exports.GEOSWKTReaderPtr = ref.refType(GEOSWKTReader);
var GEOSWKTWriter = exports.GEOSWKTWriter = voidPtr;
var GEOSWKTWriterPtr = exports.GEOSWKTWriterPtr = ref.refType(GEOSWKTWriter);
var GEOSWKBReader = exports.GEOSWKBReader = voidPtr;
var GEOSWKBReaderPtr = exports.GEOSWKBReaderPtr = ref.refType(GEOSWKBReader);
var GEOSWKBWriter = exports.GEOSWKBWriter = voidPtr;
var GEOSWKBWriterPtr = exports.GEOSWKBWriterPtr = ref.refType(GEOSWKBWriter);

exports.api = new FFI.Library('geos_c', {
  initGEOS: [ref.types.void, [
    GEOSMessageHandler,
    GEOSMessageHandler,
  ]],
  finishGEOS: [ref.types.void, [
  ]],
  GEOS_interruptRegisterCallback: [GEOSInterruptCallback, [
    GEOSInterruptCallbackPtr,
  ]],
  GEOS_interruptRequest: [ref.types.void, [
  ]],
  GEOS_interruptCancel: [ref.types.void, [
  ]],
  initGEOS_r: [GEOSContextHandle_t, [
    GEOSMessageHandler,
    GEOSMessageHandler,
  ]],
  finishGEOS_r: [ref.types.void, [
    GEOSContextHandle_t,
  ]],
  GEOSContext_setNoticeHandler_r: [GEOSMessageHandler, [
    GEOSContextHandle_t,
    GEOSMessageHandler,
  ]],
  GEOSContext_setErrorHandler_r: [GEOSMessageHandler, [
    GEOSContextHandle_t,
    GEOSMessageHandler,
  ]],
  GEOSversion: [ref.refType(ref.types.char), [
  ]],
  GEOSGeomFromWKT: [GEOSGeometry, [
    ref.refType(ref.types.char),
  ]],
  GEOSGeomToWKT: [ref.refType(ref.types.char), [
    GEOSGeometryPtr,
  ]],
  GEOSGeomFromWKT_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    ref.refType(ref.types.char),
  ]],
  GEOSGeomToWKT_r: [ref.refType(ref.types.char), [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOS_getWKBOutputDims: [ref.types.int32, [
  ]],
  GEOS_setWKBOutputDims: [ref.types.int32, [
    ref.types.int32,
  ]],
  GEOS_getWKBOutputDims_r: [ref.types.int32, [
    GEOSContextHandle_t,
  ]],
  GEOS_setWKBOutputDims_r: [ref.types.int32, [
    GEOSContextHandle_t,
    ref.types.int32,
  ]],
  GEOS_getWKBByteOrder: [ref.types.int32, [
  ]],
  GEOS_setWKBByteOrder: [ref.types.int32, [
    ref.types.int32,
  ]],
  GEOSGeomFromWKB_buf: [GEOSGeometryPtr, [
    ref.refType(ref.types.uchar),
    ref.types.ulong,
  ]],
  GEOSGeomToWKB_buf: [ref.refType(ref.types.uchar), [
    GEOSGeometryPtr,
    size_t,
  ]],
  GEOSGeomFromHEX_buf: [GEOSGeometryPtr, [
    ref.refType(ref.types.uchar),
    ref.types.ulong,
  ]],
  GEOSGeomToHEX_buf: [ref.refType(ref.types.uchar), [
    GEOSGeometryPtr,
    size_tPtr,
  ]],
  GEOS_getWKBByteOrder_r: [ref.types.int32, [
    GEOSContextHandle_t,
  ]],
  GEOS_setWKBByteOrder_r: [ref.types.int32, [
    GEOSContextHandle_t,
    ref.types.int32,
  ]],
  GEOSGeomFromWKB_buf_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    ref.refType(ref.types.uchar),
    ref.types.ulong,
  ]],
  GEOSGeomToWKB_buf_r: [ref.refType(ref.types.uchar), [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    size_tPtr,
  ]],
  GEOSGeomFromHEX_buf_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    ref.refType(ref.types.uchar),
    ref.types.ulong,
  ]],
  GEOSGeomToHEX_buf_r: [ref.refType(ref.types.uchar), [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    size_tPtr,
  ]],
  GEOSCoordSeq_create: [GEOSCoordSequence, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  GEOSCoordSeq_create_r: [GEOSCoordSequencePtr, [
    GEOSContextHandle_t,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  GEOSCoordSeq_clone: [GEOSCoordSequencePtr, [
    GEOSCoordSequencePtr,
  ]],
  GEOSCoordSeq_clone_r: [GEOSCoordSequencePtr, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
  ]],
  GEOSCoordSeq_destroy: [ref.types.void, [
    GEOSCoordSequencePtr,
  ]],
  GEOSCoordSeq_destroy_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
  ]],
  GEOSCoordSeq_setX: [ref.types.int32, [
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.types.double,
  ]],
  GEOSCoordSeq_setY: [ref.types.int32, [
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.types.double,
  ]],
  GEOSCoordSeq_setZ: [ref.types.int32, [
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.types.double,
  ]],
  GEOSCoordSeq_setOrdinate: [ref.types.int32, [
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.types.uint32,
    ref.types.double,
  ]],
  GEOSCoordSeq_setX_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.types.double,
  ]],
  GEOSCoordSeq_setY_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.types.double,
  ]],
  GEOSCoordSeq_setZ_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.types.double,
  ]],
  GEOSCoordSeq_setOrdinate_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.types.uint32,
    ref.types.double,
  ]],
  GEOSCoordSeq_getX: [ref.types.int32, [
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.refType(ref.types.double),
  ]],
  GEOSCoordSeq_getY: [ref.types.int32, [
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.refType(ref.types.double),
  ]],
  GEOSCoordSeq_getZ: [ref.types.int32, [
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.refType(ref.types.double),
  ]],
  GEOSCoordSeq_getOrdinate: [ref.types.int32, [
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.types.uint32,
    ref.refType(ref.types.double),
  ]],
  GEOSCoordSeq_getX_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.refType(ref.types.double),
  ]],
  GEOSCoordSeq_getY_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.refType(ref.types.double),
  ]],
  GEOSCoordSeq_getZ_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.refType(ref.types.double),
  ]],
  GEOSCoordSeq_getOrdinate_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
    ref.types.uint32,
    ref.types.uint32,
    ref.refType(ref.types.double),
  ]],
  GEOSCoordSeq_getSize: [ref.types.int32, [
    GEOSCoordSequencePtr,
    ref.refType(ref.types.uint32),
  ]],
  GEOSCoordSeq_getDimensions: [ref.types.int32, [
    GEOSCoordSequencePtr,
    ref.refType(ref.types.uint32),
  ]],
  GEOSCoordSeq_getSize_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
    ref.refType(ref.types.uint32),
  ]],
  GEOSCoordSeq_getDimensions_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
    ref.refType(ref.types.uint32),
  ]],
  GEOSProject: [ref.types.double, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSProject_r: [ref.types.double, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSInterpolate: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    ref.types.double,
  ]],
  GEOSInterpolate_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.double,
  ]],
  GEOSProjectNormalized: [ref.types.double, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSProjectNormalized_r: [ref.types.double, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSInterpolateNormalized: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    ref.types.double,
  ]],
  GEOSInterpolateNormalized_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.double,
  ]],
  GEOSBuffer: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    ref.types.double,
    ref.types.int32,
  ]],
  GEOSBuffer_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.double,
    ref.types.int32,
  ]],
  GEOSBufferParams_create: [GEOSBufferParams, [
  ]],
  GEOSBufferParams_create_r: [GEOSBufferParamsPtr, [
    GEOSContextHandle_t,
  ]],
  GEOSBufferParams_destroy: [ref.types.void, [
    GEOSBufferParamsPtr,
  ]],
  GEOSBufferParams_destroy_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSBufferParamsPtr,
  ]],
  GEOSBufferParams_setEndCapStyle: [ref.types.int32, [
    GEOSBufferParamsPtr,
    ref.types.int32,
  ]],
  GEOSBufferParams_setEndCapStyle_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSBufferParamsPtr,
    ref.types.int32,
  ]],
  GEOSBufferParams_setJoinStyle: [ref.types.int32, [
    GEOSBufferParamsPtr,
    ref.types.int32,
  ]],
  GEOSBufferParams_setJoinStyle_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSBufferParamsPtr,
    ref.types.int32,
  ]],
  GEOSBufferParams_setMitreLimit: [ref.types.int32, [
    GEOSBufferParamsPtr,
    ref.types.double,
  ]],
  GEOSBufferParams_setMitreLimit_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSBufferParamsPtr,
    ref.types.double,
  ]],
  GEOSBufferParams_setQuadrantSegments: [ref.types.int32, [
    GEOSBufferParamsPtr,
    ref.types.int32,
  ]],
  GEOSBufferParams_setQuadrantSegments_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSBufferParamsPtr,
    ref.types.int32,
  ]],
  GEOSBufferParams_setSingleSided: [ref.types.int32, [
    GEOSBufferParamsPtr,
    ref.types.int32,
  ]],
  GEOSBufferParams_setSingleSided_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSBufferParamsPtr,
    ref.types.int32,
  ]],
  GEOSBufferWithParams: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    GEOSBufferParamsPtr,
    ref.types.double,
  ]],
  GEOSBufferWithParams_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSBufferParamsPtr,
    ref.types.double,
  ]],
  GEOSBufferWithStyle: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    ref.types.double,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.double,
  ]],
  GEOSBufferWithStyle_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.double,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.double,
  ]],
  GEOSSingleSidedBuffer: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    ref.types.double,
    ref.types.int32,
    ref.types.int32,
    ref.types.double,
    ref.types.int32,
  ]],
  GEOSSingleSidedBuffer_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.double,
    ref.types.int32,
    ref.types.int32,
    ref.types.double,
    ref.types.int32,
  ]],
  GEOSOffsetCurve: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    ref.types.double,
    ref.types.int32,
    ref.types.int32,
    ref.types.double,
  ]],
  GEOSOffsetCurve_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.double,
    ref.types.int32,
    ref.types.int32,
    ref.types.double,
  ]],
  GEOSGeom_createPoint: [GEOSGeometryPtr, [
    GEOSCoordSequencePtr,
  ]],
  GEOSGeom_createEmptyPoint: [GEOSGeometryPtr, [
  ]],
  GEOSGeom_createLinearRing: [GEOSGeometryPtr, [
    GEOSCoordSequencePtr,
  ]],
  GEOSGeom_createLineString: [GEOSGeometryPtr, [
    GEOSCoordSequencePtr,
  ]],
  GEOSGeom_createEmptyLineString: [GEOSGeometryPtr, [
  ]],
  GEOSGeom_createPoint_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
  ]],
  GEOSGeom_createEmptyPoint_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
  ]],
  GEOSGeom_createLinearRing_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
  ]],
  GEOSGeom_createLineString_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSCoordSequencePtr,
  ]],
  GEOSGeom_createEmptyLineString_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
  ]],
  GEOSGeom_createEmptyPolygon: [GEOSGeometryPtr, [
  ]],
  GEOSGeom_createPolygon: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    voidPtr,
    ref.types.uint32,
  ]],
  GEOSGeom_createCollection: [GEOSGeometryPtr, [
    ref.types.int32,
    voidPtr,
    ref.types.uint32,
  ]],
  GEOSGeom_createEmptyCollection: [GEOSGeometryPtr, [
    ref.types.int32,
  ]],
  GEOSGeom_createEmptyPolygon_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
  ]],
  GEOSGeom_createPolygon_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    voidPtr,
    ref.types.uint32,
  ]],
  GEOSGeom_createCollection_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    ref.types.int32,
    voidPtr,
    ref.types.uint32,
  ]],
  GEOSGeom_createEmptyCollection_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    ref.types.int32,
  ]],
  GEOSGeom_clone: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSGeom_clone_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGeom_destroy: [ref.types.void, [
    GEOSGeometryPtr,
  ]],
  GEOSGeom_destroy_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSEnvelope: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSIntersection: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSConvexHull: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSDifference: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSSymDifference: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSBoundary: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSUnion: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSUnaryUnion: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSUnionCascaded: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSPointOnSurface: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSGetCentroid: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSNode: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSEnvelope_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSIntersection_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSConvexHull_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSDifference_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSSymDifference_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSBoundary_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSUnion_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSUnaryUnion_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSUnionCascaded_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSPointOnSurface_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGetCentroid_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSNode_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSPolygonize: [GEOSGeometryPtr, [
    voidPtr,
    ref.types.uint32,
  ]],
  GEOSPolygonizer_getCutEdges: [GEOSGeometryPtr, [
    voidPtr,
    ref.types.uint32,
  ]],
  GEOSPolygonize_full: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    voidPtr,
    voidPtr,
    voidPtr,
  ]],
  GEOSLineMerge: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSSimplify: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    ref.types.double,
  ]],
  GEOSTopologyPreserveSimplify: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    ref.types.double,
  ]],
  GEOSPolygonize_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    voidPtr,
    ref.types.uint32,
  ]],
  GEOSPolygonizer_getCutEdges_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    voidPtr,
    ref.types.uint32,
  ]],
  GEOSPolygonize_full_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    voidPtr,
    voidPtr,
    voidPtr,
  ]],
  GEOSLineMerge_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSSimplify_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.double,
  ]],
  GEOSTopologyPreserveSimplify_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.double,
  ]],
  GEOSGeom_extractUniquePoints: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSGeom_extractUniquePoints_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSSharedPaths: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSSharedPaths_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSSnap: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.types.double,
  ]],
  GEOSSnap_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.types.double,
  ]],
  GEOSDelaunayTriangulation: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    ref.types.double,
    ref.types.int32,
  ]],
  GEOSDelaunayTriangulation_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.double,
    ref.types.int32,
  ]],
  GEOSDisjoint: [ref.types.char, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSTouches: [ref.types.char, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSIntersects: [ref.types.char, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSCrosses: [ref.types.char, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSWithin: [ref.types.char, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSContains: [ref.types.char, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSOverlaps: [ref.types.char, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSEquals: [ref.types.char, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSEqualsExact: [ref.types.char, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.types.double,
  ]],
  GEOSCovers: [ref.types.char, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSCoveredBy: [ref.types.char, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSDisjoint_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSTouches_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSIntersects_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSCrosses_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSWithin_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSContains_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSOverlaps_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSEquals_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSEqualsExact_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.types.double,
  ]],
  GEOSCovers_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSCoveredBy_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPrepare: [GEOSPreparedGeometry, [
    GEOSGeometryPtr,
  ]],
  GEOSPreparedGeom_destroy: [ref.types.void, [
    GEOSPreparedGeometryPtr,
  ]],
  GEOSPreparedContains: [ref.types.char, [
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedContainsProperly: [ref.types.char, [
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedCoveredBy: [ref.types.char, [
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedCovers: [ref.types.char, [
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedCrosses: [ref.types.char, [
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedDisjoint: [ref.types.char, [
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedIntersects: [ref.types.char, [
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedOverlaps: [ref.types.char, [
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedTouches: [ref.types.char, [
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedWithin: [ref.types.char, [
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPrepare_r: [GEOSPreparedGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedGeom_destroy_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSPreparedGeometryPtr,
  ]],
  GEOSPreparedContains_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedContainsProperly_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedCoveredBy_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedCovers_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedCrosses_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedDisjoint_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedIntersects_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedOverlaps_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedTouches_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSPreparedWithin_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSPreparedGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSSTRtree_create: [GEOSSTRtree, [
    ref.types.ulong,
  ]],
  GEOSSTRtree_insert: [ref.types.void, [
    GEOSSTRtreePtr,
    GEOSGeometryPtr,
    voidPtr,
  ]],
  GEOSSTRtree_query: [ref.types.void, [
    GEOSSTRtreePtr,
    GEOSGeometryPtr,
    GEOSQueryCallback,
    voidPtr,
  ]],
  GEOSSTRtree_iterate: [ref.types.void, [
    GEOSSTRtreePtr,
    GEOSQueryCallback,
    voidPtr,
  ]],
  GEOSSTRtree_remove: [ref.types.char, [
    GEOSSTRtreePtr,
    GEOSGeometryPtr,
    voidPtr,
  ]],
  GEOSSTRtree_destroy: [ref.types.void, [
    GEOSSTRtreePtr,
  ]],
  GEOSSTRtree_create_r: [GEOSSTRtreePtr, [
    GEOSContextHandle_t,
    ref.types.ulong,
  ]],
  GEOSSTRtree_insert_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSSTRtreePtr,
    GEOSGeometryPtr,
    voidPtr,
  ]],
  GEOSSTRtree_query_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSSTRtreePtr,
    GEOSGeometryPtr,
    GEOSQueryCallback,
    voidPtr,
  ]],
  GEOSSTRtree_iterate_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSSTRtreePtr,
    GEOSQueryCallback,
    voidPtr,
  ]],
  GEOSSTRtree_remove_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSSTRtreePtr,
    GEOSGeometryPtr,
    voidPtr,
  ]],
  GEOSSTRtree_destroy_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSSTRtreePtr,
  ]],
  GEOSisEmpty: [ref.types.char, [
    GEOSGeometryPtr,
  ]],
  GEOSisSimple: [ref.types.char, [
    GEOSGeometryPtr,
  ]],
  GEOSisRing: [ref.types.char, [
    GEOSGeometryPtr,
  ]],
  GEOSHasZ: [ref.types.char, [
    GEOSGeometryPtr,
  ]],
  GEOSisClosed: [ref.types.char, [
    GEOSGeometryPtr,
  ]],
  GEOSisEmpty_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSisSimple_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSisRing_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSHasZ_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSisClosed_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSRelatePattern: [ref.types.char, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.refType(ref.types.char),
  ]],
  GEOSRelatePattern_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.refType(ref.types.char),
  ]],
  GEOSRelate: [ref.refType(ref.types.char), [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSRelate_r: [ref.refType(ref.types.char), [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSRelatePatternMatch: [ref.types.char, [
    ref.refType(ref.types.char),
    ref.refType(ref.types.char),
  ]],
  GEOSRelatePatternMatch_r: [ref.types.char, [
    GEOSContextHandle_t,
    ref.refType(ref.types.char),
    ref.refType(ref.types.char),
  ]],
  GEOSRelateBoundaryNodeRule: [ref.refType(ref.types.char), [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.types.int32,
  ]],
  GEOSRelateBoundaryNodeRule_r: [ref.refType(ref.types.char), [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.types.int32,
  ]],
  GEOSisValid: [ref.types.char, [
    GEOSGeometryPtr,
  ]],
  GEOSisValid_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSisValidReason: [ref.refType(ref.types.char), [
    GEOSGeometryPtr,
  ]],
  GEOSisValidReason_r: [ref.refType(ref.types.char), [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSisValidDetail: [ref.types.char, [
    GEOSGeometryPtr,
    ref.types.int32,
    voidPtr,
    voidPtr,
  ]],
  GEOSisValidDetail_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.int32,
    voidPtr,
    voidPtr,
  ]],
  GEOSGeomType: [ref.refType(ref.types.char), [
    GEOSGeometryPtr,
  ]],
  GEOSGeomType_r: [ref.refType(ref.types.char), [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGeomTypeId: [ref.types.int32, [
    GEOSGeometryPtr,
  ]],
  GEOSGeomTypeId_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGetSRID: [ref.types.int32, [
    GEOSGeometryPtr,
  ]],
  GEOSGetSRID_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSSetSRID: [ref.types.void, [
    GEOSGeometryPtr,
    ref.types.int32,
  ]],
  GEOSSetSRID_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.int32,
  ]],
  GEOSGetNumGeometries: [ref.types.int32, [
    GEOSGeometryPtr,
  ]],
  GEOSGetNumGeometries_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGetGeometryN: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    ref.types.int32,
  ]],
  GEOSGetGeometryN_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.int32,
  ]],
  GEOSNormalize: [ref.types.int32, [
    GEOSGeometryPtr,
  ]],
  GEOSNormalize_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGetNumInteriorRings: [ref.types.int32, [
    GEOSGeometryPtr,
  ]],
  GEOSGetNumInteriorRings_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGeomGetNumPoints: [ref.types.int32, [
    GEOSGeometryPtr,
  ]],
  GEOSGeomGetNumPoints_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGeomGetX: [ref.types.int32, [
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSGeomGetY: [ref.types.int32, [
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSGeomGetX_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSGeomGetY_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSGetInteriorRingN: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    ref.types.int32,
  ]],
  GEOSGetInteriorRingN_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.int32,
  ]],
  GEOSGetExteriorRing: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSGetExteriorRing_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGetNumCoordinates: [ref.types.int32, [
    GEOSGeometryPtr,
  ]],
  GEOSGetNumCoordinates_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGeom_getCoordSeq: [GEOSCoordSequencePtr, [
    GEOSGeometryPtr,
  ]],
  GEOSGeom_getCoordSeq_r: [GEOSCoordSequencePtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGeom_getDimensions: [ref.types.int32, [
    GEOSGeometryPtr,
  ]],
  GEOSGeom_getDimensions_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGeom_getCoordinateDimension: [ref.types.int32, [
    GEOSGeometryPtr,
  ]],
  GEOSGeom_getCoordinateDimension_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGeomGetPointN: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
    ref.types.int32,
  ]],
  GEOSGeomGetStartPoint: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSGeomGetEndPoint: [GEOSGeometryPtr, [
    GEOSGeometryPtr,
  ]],
  GEOSGeomGetPointN_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.types.int32,
  ]],
  GEOSGeomGetStartPoint_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSGeomGetEndPoint_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
  ]],
  GEOSArea: [ref.types.int32, [
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSLength: [ref.types.int32, [
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSDistance: [ref.types.int32, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSHausdorffDistance: [ref.types.int32, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSHausdorffDistanceDensify: [ref.types.int32, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.types.double,
    ref.refType(ref.types.double),
  ]],
  GEOSGeomGetLength: [ref.types.int32, [
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSArea_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSLength_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSDistance_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSHausdorffDistance_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSHausdorffDistanceDensify_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
    ref.types.double,
    ref.refType(ref.types.double),
  ]],
  GEOSGeomGetLength_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    ref.refType(ref.types.double),
  ]],
  GEOSNearestPoints: [GEOSCoordSequencePtr, [
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSNearestPoints_r: [GEOSCoordSequencePtr, [
    GEOSContextHandle_t,
    GEOSGeometryPtr,
    GEOSGeometryPtr,
  ]],
  GEOSOrientationIndex: [ref.types.int32, [
    ref.types.double,
    ref.types.double,
    ref.types.double,
    ref.types.double,
    ref.types.double,
    ref.types.double,
  ]],
  GEOSOrientationIndex_r: [ref.types.int32, [
    GEOSContextHandle_t,
    ref.types.double,
    ref.types.double,
    ref.types.double,
    ref.types.double,
    ref.types.double,
    ref.types.double,
  ]],
  GEOSWKTReader_create: [GEOSWKTReader, [
  ]],
  GEOSWKTReader_destroy: [ref.types.void, [
    GEOSWKTReaderPtr,
  ]],
  GEOSWKTReader_read: [GEOSGeometryPtr, [
    GEOSWKTReaderPtr,
    ref.refType(ref.types.char),
  ]],
  GEOSWKTReader_create_r: [GEOSWKTReaderPtr, [
    GEOSContextHandle_t,
  ]],
  GEOSWKTReader_destroy_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSWKTReaderPtr,
  ]],
  GEOSWKTReader_read_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSWKTReaderPtr,
    ref.refType(ref.types.char),
  ]],
  GEOSWKTWriter_create: [GEOSWKTWriter, [
  ]],
  GEOSWKTWriter_destroy: [ref.types.void, [
    GEOSWKTWriterPtr,
  ]],
  GEOSWKTWriter_write: [ref.refType(ref.types.char), [
    GEOSWKTWriterPtr,
    GEOSGeometryPtr,
  ]],
  GEOSWKTWriter_setTrim: [ref.types.void, [
    GEOSWKTWriterPtr,
    ref.types.char,
  ]],
  GEOSWKTWriter_setRoundingPrecision: [ref.types.void, [
    GEOSWKTWriterPtr,
    ref.types.int32,
  ]],
  GEOSWKTWriter_setOutputDimension: [ref.types.void, [
    GEOSWKTWriterPtr,
    ref.types.int32,
  ]],
  GEOSWKTWriter_getOutputDimension: [ref.types.int32, [
    GEOSWKTWriterPtr,
  ]],
  GEOSWKTWriter_setOld3D: [ref.types.void, [
    GEOSWKTWriterPtr,
    ref.types.int32,
  ]],
  GEOSWKTWriter_create_r: [GEOSWKTWriterPtr, [
    GEOSContextHandle_t,
  ]],
  GEOSWKTWriter_destroy_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSWKTWriterPtr,
  ]],
  GEOSWKTWriter_write_r: [ref.refType(ref.types.char), [
    GEOSContextHandle_t,
    GEOSWKTWriterPtr,
    GEOSGeometryPtr,
  ]],
  GEOSWKTWriter_setTrim_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSWKTWriterPtr,
    ref.types.char,
  ]],
  GEOSWKTWriter_setRoundingPrecision_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSWKTWriterPtr,
    ref.types.int32,
  ]],
  GEOSWKTWriter_setOutputDimension_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSWKTWriterPtr,
    ref.types.int32,
  ]],
  GEOSWKTWriter_getOutputDimension_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSWKTWriterPtr,
  ]],
  GEOSWKTWriter_setOld3D_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSWKTWriterPtr,
    ref.types.int32,
  ]],
  GEOSWKBReader_create: [GEOSWKBReader, [
  ]],
  GEOSWKBReader_destroy: [ref.types.void, [
    GEOSWKBReaderPtr,
  ]],
  GEOSWKBReader_read: [GEOSGeometryPtr, [
    GEOSWKBReaderPtr,
    ref.refType(ref.types.uchar),
    ref.types.ulong,
  ]],
  GEOSWKBReader_readHEX: [GEOSGeometryPtr, [
    GEOSWKBReaderPtr,
    ref.refType(ref.types.uchar),
    ref.types.ulong,
  ]],
  GEOSWKBReader_create_r: [GEOSWKBReaderPtr, [
    GEOSContextHandle_t,
  ]],
  GEOSWKBReader_destroy_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSWKBReaderPtr,
  ]],
  GEOSWKBReader_read_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSWKBReaderPtr,
    ref.refType(ref.types.uchar),
    ref.types.ulong,
  ]],
  GEOSWKBReader_readHEX_r: [GEOSGeometryPtr, [
    GEOSContextHandle_t,
    GEOSWKBReaderPtr,
    ref.refType(ref.types.uchar),
    ref.types.ulong,
  ]],
  GEOSWKBWriter_create: [GEOSWKBWriter, [
  ]],
  GEOSWKBWriter_destroy: [ref.types.void, [
    GEOSWKBWriterPtr,
  ]],
  GEOSWKBWriter_create_r: [GEOSWKBWriterPtr, [
    GEOSContextHandle_t,
  ]],
  GEOSWKBWriter_destroy_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSWKBWriterPtr,
  ]],
  GEOSWKBWriter_write: [ref.refType(ref.types.uchar), [
    GEOSWKBWriterPtr,
    GEOSGeometryPtr,
    size_tPtr,
  ]],
  GEOSWKBWriter_writeHEX: [ref.refType(ref.types.uchar), [
    GEOSWKBWriterPtr,
    GEOSGeometryPtr,
    size_tPtr,
  ]],
  GEOSWKBWriter_write_r: [ref.refType(ref.types.uchar), [
    GEOSContextHandle_t,
    GEOSWKBWriterPtr,
    GEOSGeometryPtr,
    size_tPtr,
  ]],
  GEOSWKBWriter_writeHEX_r: [ref.refType(ref.types.uchar), [
    GEOSContextHandle_t,
    GEOSWKBWriterPtr,
    GEOSGeometryPtr,
    size_tPtr,
  ]],
  GEOSWKBWriter_getOutputDimension: [ref.types.int32, [
    GEOSWKBWriterPtr,
  ]],
  GEOSWKBWriter_setOutputDimension: [ref.types.void, [
    GEOSWKBWriterPtr,
    ref.types.int32,
  ]],
  GEOSWKBWriter_getOutputDimension_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSWKBWriterPtr,
  ]],
  GEOSWKBWriter_setOutputDimension_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSWKBWriterPtr,
    ref.types.int32,
  ]],
  GEOSWKBWriter_getByteOrder: [ref.types.int32, [
    GEOSWKBWriterPtr,
  ]],
  GEOSWKBWriter_setByteOrder: [ref.types.void, [
    GEOSWKBWriterPtr,
    ref.types.int32,
  ]],
  GEOSWKBWriter_getByteOrder_r: [ref.types.int32, [
    GEOSContextHandle_t,
    GEOSWKBWriterPtr,
  ]],
  GEOSWKBWriter_setByteOrder_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSWKBWriterPtr,
    ref.types.int32,
  ]],
  GEOSWKBWriter_getIncludeSRID: [ref.types.char, [
    GEOSWKBWriterPtr,
  ]],
  GEOSWKBWriter_setIncludeSRID: [ref.types.void, [
    GEOSWKBWriterPtr,
    ref.types.char,
  ]],
  GEOSWKBWriter_getIncludeSRID_r: [ref.types.char, [
    GEOSContextHandle_t,
    GEOSWKBWriterPtr,
  ]],
  GEOSWKBWriter_setIncludeSRID_r: [ref.types.void, [
    GEOSContextHandle_t,
    GEOSWKBWriterPtr,
    ref.types.char,
  ]],
  GEOSFree: [ref.types.void, [
    voidPtr,
  ]],
  GEOSFree_r: [ref.types.void, [
    GEOSContextHandle_t,
    voidPtr,
  ]],
});

