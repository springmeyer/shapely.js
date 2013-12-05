# Shapely.js

FFI Bindings to [libgeos](http://trac.osgeo.org/geos/). Inspired by [Shapely in python ](http://toblerity.org/shapely/manual.html).

EXPERIMENTAL ONLY. No current releases.

This module is an investigation in these questions:

 - How feasible is it to develop stable, cross platform, and reasonably fast bindings to a C API using node-ffi, ref, ffi-generation, and node-weak?
 - What does a good Javascript API look like that leverages the power of libgeos but hides the complexity?
 - How much slower is an ffi-based approach than native calls in C++ and pure JS based geometry ops?

## Requires

- Node.js v0.10.x
- node-gyp [Dependencies](https://github.com/TooTallNate/node-gyp/#installation): python, make, c++ compiler

## Setup

To install:

    git clone https://github.com/springmeyer/Shapely.js.git
    cd Shapely.js
    npm install

## Test

    npm test

## Benchmarks

Working benchmarks at https://github.com/springmeyer/geom-ops-bench

## Details

At build time this module automatically generates raw libgeos ffi bindings (in `lib/geos.js`) using a [patched](https://github.com/springmeyer/node-ffi-generate/commit/eae6d9c2212486eb76979adc1d1ef98cb4e579b9) version of [node-ffi-generate](https://github.com/tjfontaine/node-ffi-generate). Then it provides a nascent wrapper to start making the API simpler (in `index.js`).

## See also

- Node C++ bindings to libgeos: https://github.com/kashif/node-geos
- Ruby ffi bindings to libgeso: https://github.com/dark-panda/ffi-geos
- Pure JS geometry ops: https://github.com/maxogden/geojson-js-utils
- Pure JS geometry ops: https://github.com/chelm/shapely.js