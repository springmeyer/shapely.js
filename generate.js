var cp = require('child_process');
var existsSync = require('fs').existsSync || require('path').existsSync;
var fs = require('fs');

var args = [
    './node_modules/ffi-generate/bin/ffi-generate.js',
    '-m',
    'api',
    '-l',
    'libgeos_c',
    '-f'
];

if (existsSync('/usr/local/include/geos_c.h')) {
    args.push('/usr/local/include/geos_c.h');
} else if (existsSync('/usr/include/geos_c.h')) {
    args.push('/usr/include/geos_c.h');
} else {
    console.error("Could not find 'geos_c.h'!");
    process.exit(-1);
}

var library_path = process.env.DYLD_LIBRARY_PATH || process.env.LD_LIBRARY_PATH;
if (library_path) {
    args.push('-L')
    args.push(process.env.LD_LIBRARY_PATH.split(':')[0])
}

cp.execFile(process.execPath, args, function(err, stdout, stderr) {
    if (stderr) {
        console.error(stderr);
    }
    if (err) {
        console.error(err.message);
        process.exit(-1);
    } else {
        console.log("sucessfully ran ffi-generate");
        fs.writeFileSync('./lib/geos.js',stdout);
        process.exit(0);
    }
});