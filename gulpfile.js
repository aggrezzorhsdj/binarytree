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
    sourceFile: 'src/ts/main.ts',
    destFile: 'bundle.js',
    destFolder: 'dist/'
};

var bundler = browserify({
    entries: paths.sourceFile,
    cache: {}, packageCache: {}, fullPaths: true, debug: true
}).plugin(tsify);

function bundles(watching,babelit){
    if(babelit){
        bundler = bundler
            .transform('babelify', {
                presets: ['es2015'],
                extensions: ['.ts']
            })
    }
    var bundle = function(){
        return bundler
            .bundle()
            .on('error',function(){})
            .pipe(source(paths.destFile))
            .pipe(gulp.dest(paths.destFolder))

    }
    // console.log(watching);
    if(watching){
        bundler = watchify(bundler);
        bundler.on("update",bundle);
    }
    return bundle();
}

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("dev",gulp.series("copy-html"), bundles(true,true));
