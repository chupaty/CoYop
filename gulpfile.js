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
            experimentalDecorators: true
        }))
        .on('error', function() { process.exit(1); })
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});