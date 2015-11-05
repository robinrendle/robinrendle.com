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
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    paths = {
        styles: {
            src:   "static/screen.scss",
            dest:  "build/css",
            watch: "static/sass/**/*.*",
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
            "_components/*.html",
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

gulp.task('serve', ['sass', 'work'], function(){
    browserSync.init({
        // Using a localhost address with a port
        proxy: "localhost:9292"
    });
    gulp.watch(['static/sass/*.scss', 'static/sass/**/*.scss'], ['sass']);
    gulp.watch(['static/sass/*.scss', 'static/sass/**/work.scss'], ['work']);
    gulp.watch(["./*.html", "./**/*.html"]).on('change', reload);
    gulp.watch([paths.scripts.src, paths.scripts.libs], ['scripts']);
});


// Compiles scss into the build/css dir
gulp.task('sass', function(){
    gulp.src('./static/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .on("error", function(err){
            browserSync.notify(err.message);
        })
        .pipe(autoprefixer("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(reload({stream: true}));
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



gulp.task('default', ['images', 'sass', 'work', 'scripts', 'serve']);
