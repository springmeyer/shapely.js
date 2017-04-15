# shapely.js

Node.js geometry library. Bindings to [libgeos](http://trac.osgeo.org/geos/) using [node-ffi](https://github.com/rbranson/node-ffi). Inspired by [Shapely in python](http://toblerity.org/shapely/manual.html).

[![Build Status](https://secure.travis-ci.org/springmeyer/shapely.js.png)](https://travis-ci.org/springmeyer/shapely.js)

EXPERIMENTAL ONLY. No current releases.

This is an investigation into these questions:

 - How feasible is it to develop stable, cross platform, and reasonably fast node.js bindings to a C API using node-ffi, ref, ffi-generation, and node-weak?
 - What does a good Javascript API look like that leverages libgeos but hides the complexity?
 - How does an ffi-based approach perform compared to native calls in C++ or pure JS based geometry ops?

## Requires

- Node.js v0.10.x
- node-gyp [Dependencies](https://github.com/TooTallNate/node-gyp/#installation): python, make, c++ compiler

## Setup

To install:

    git clone https://github.com/springmeyer/shapely.js.git
    cd shapely.js
    npm install

On OS X Mavericks (other versions not tested), libclang needs to be added
to the library path when running npm install:

    git clone https://github.com/springmeyer/shapely.js.git
    cd shapely.js
    LD_LIBRARY_PATH=$(dirname $(mdfind -name libclang.dylib)) npm install

## Test

    npm test

## Benchmarks

Working benchmarks at https://github.com/springmeyer/geom-ops-bench

## Details

At build time this module automatically generates raw libgeos ffi bindings (in `lib/geos.js`) using a [patched](https://github.com/springmeyer/node-ffi-generate/commit/eae6d9c2212486eb76979adc1d1ef98cb4e579b9) version of [node-ffi-generate](https://github.com/tjfontaine/node-ffi-generate). Then it provides a nascent wrapper to start making the API simpler (in `index.js`).

## See also

- Python ffi bindings to libgeos: http://toblerity.org/shapely/manual.html
- Ruby ffi bindings to libgeos: https://github.com/dark-panda/ffi-geos
- Pure JS geometry ops: https://github.com/maxogden/geojson-js-utils
- Pure JS geometry ops: https://github.com/chelm/shapely.js
- Node C++ bindings to libgeos: https://github.com/kashif/node-geos
