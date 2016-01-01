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
            src:   "_sass/screen.scss",
            dest:  "build/css",
            watch: "_sass/**/*.*",
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
        .pipe(gulp.dest('build/images/')).on('error', cb)
        .pipe(gulp.dest('build/images'));
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
    gulp.watch(['_sass/*.scss', '_sass/**/*.scss'], ['sass']);
    gulp.watch(['*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('sass', function () {
    return gulp.src('_sass/screen.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(['last 3 versions', '> 1%', 'ie 9'], { cascade: true }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

gulp.task('work', function(){
    gulp.src('./static/sass/work.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .on("error", function(err){
            browserSync.notify(err.message);
        })
        .pipe(autoprefixer("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(concat('work.min.css'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(reload({stream: true}));
    gulp.src([
        './static/js/ff-observer.js'
    ])
        .pipe(uglify())
        .pipe(concat('work.min.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(reload({stream: true}))
});



gulp.task('default', ['images', 'sass', 'watch', 'scripts', 'browser-sync']);
