var gulp = require('gulp');


var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");

gulp.task('tsc', function () {
    return gulp.src('**/*.ts', { base: '.' })
        .pipe(sourcemaps.init())
        .pipe(tsc({
            target: 'ES5',
            module: 'commonjs',
            noEmitOnError: true,
            noImplicitAny: true,
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
        }))
        .on('error', function() { process.exit(1); })
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});





var mocha = require('gulp-mocha');
var childProcess = require('child_process');
require('source-map-support').install();
require('core-js');

gulp.task('watch', function () {
    var spawnTests = function() {
//        childProcess.spawn('gulp', ['test'], { stdio: 'inherit' });
        childProcess.execFile('gulp', ['test'], { stdio: 'inherit' });
    }
    spawnTests();
    gulp.watch('**/*.ts', spawnTests);
});

gulp.task('test', ['tsc'], function () {
//    return gulp.src(['tests/**/*.js'])
    return gulp.src(['app.js'])

        .pipe(mocha({ reporter: 'spec', ui: 'bdd' }));
});





