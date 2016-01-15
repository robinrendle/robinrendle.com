var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    imageop = require('gulp-image-optimization'),
    watch = require('gulp-watch'),
    cp = require('child_process'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    paths = {
        styles: {
            src:   "_static/sass/screen.scss",
            dest:  "build/css",
            lexicon: "_static/sass/visual-lexicon.scss",
            watch: ["_static/sass/*.*", "_static/sass/**/*.*"],
        },
        images: {
            src:   [
                "static/images/*.png",
                "static/images/**/*.png",
                "static/images/*.jpg",
                "static/images/**/*.jpg",
            ],
            dest:  "build/images/"
        },
        scripts: {
            libs: [
                "static/js/modules/*.js"
            ],
            src: [
                "static/js/app.js"
            ],
            dest: "build/js/"
        },
        watch: [
            "*.html",
            "_includes/*.html",
        ],
    };

// Concats + minifies JS
gulp.task('scripts', function() {
    gulp.src(paths.scripts.libs.concat(paths.scripts.src) )
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(reload({stream: true}))
});


gulp.task('images', function(cb){
    gulp.src(['static/images/**/*.*'])
        .pipe(imageop({
            optimizationLevel: 6,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(paths.images.dest)).on('error', cb)
        .pipe(gulp.dest(paths.images.dest));
});


var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('watch', function () {
    gulp.watch(['_static/sass/*.scss', '_static/sass/**/*.scss'], ['sass']);
    gulp.watch(['*.html', '*/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('sass', function () {
    gulp.src(paths.styles.src)
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(['last 3 versions', '> 1%', 'ie 9'], { cascade: true }))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('build/css'));
    gulp.src(paths.styles.lexicon)
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify,
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('build/css'));
});

gulp.task('work', function(){
    gulp.src('_static/sass/work.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(['last 3 versions', '> 1%', 'ie 9'], { cascade: true }))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('build/css'))

    gulp.src([
        '_static/js/lib/ff-observer.js'
    ])
        .pipe(uglify())
        .pipe(concat('min.ff-observer.js'))
        .pipe(gulp.dest('build/js'))
        .pipe(reload({stream: true}))
});



gulp.task('default', ['images', 'sass', 'watch', 'scripts', 'work', 'browser-sync']);
