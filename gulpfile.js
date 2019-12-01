var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

var paths = {
    pages: ['src/*.html'],
    sourceFile: ['src/ts/main.ts'],
    destFile: 'bundle.js',
    destFolder: 'dist/'
};

function buildBundle(watching){
    var bundler = browserify({
        basedir: ".",
        entries: paths.sourceFile,
        cache: {}, packageCache: {}, fullPaths: true, debug: true
    }).plugin(tsify);
    bundler = bundler.transform('babelify', {presets: ['es2015'],extensions: ['.ts']});
    function bundle(b){
        var startMs = Date.now();
        var db = b.bundle()
            .on('error',function(){})
            .pipe(source("bundle.js"))
            .pipe(gulp.dest("dist"))
        console.log('Updated bundle file in', (Date.now() - startMs) + 'ms');
        return db;
    }
    if(watching){
        bundler = watchify(bundler)
            .on("update",function(){
                bunlde(bundler);
            });
    }
    return bundle(bundler);
}
gulp.task("build-ts",function(done){
    buildBundle(false);
    done();
});
gulp.task("watch-ts",function(done){
    buildBundle(true);
    done();
});
gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("release", gulp.parallel("copy-html","build-ts"));
