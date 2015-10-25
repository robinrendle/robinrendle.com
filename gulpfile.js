var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    imageop = require('gulp-image-optimization'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    eslint = require('gulp-eslint');

// Concats + minifies JS
gulp.task('scripts', function() {
    gulp.src([
        './static/js/app.js'
    ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./build/js'))
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

gulp.task('serve', ['sass'], function(){
    browserSync.init({
        // Using a localhost address with a port
        proxy: "localhost:9292"
    });
    gulp.watch(['static/sass/*.scss', 'static/sass/**/*.scss'], ['sass']);
    gulp.watch(["./*.html", "./**/*.html"]).on('change', reload);
    gulp.watch(['static/js/*.js'], ['scripts']);
});


// Compiles scss into the build/css dir
gulp.task('sass', function(){
    gulp.src('./static/sass/*.scss')
        .pipe(sass({ errLogToConsole: true}))
        .pipe(prefix())
        .pipe(gulp.dest('./build/css'))
        .pipe(reload({stream: true}));
});

// Autoprefixes on minified CSS
gulp.task('prefix', function(){
    gulp.src('./build/css/*.css')
        .pipe(prefix())
        .pipe(gulp.dest('./build/css'));
});

// Minifies CSS
gulp.task('minify', function(){
    gulp.src('./build/css/screen.css')
        .pipe(size({gzip: true, showFiles: true, title:'minified screen.css'}))
        .pipe(minifyCSS())
        .pipe(rename('screen.min.css'))
        .pipe(gulp.dest('./build/css/'))
        .pipe(size({gzip: true, showFiles: true, title:'minified screen.css'}));
});

gulp.task('start', function(){
    gulp.watch('./build/css/screen.css', ['minify']);
});

gulp.task('build', ['images', 'minify', 'sass', 'scripts']);

gulp.task('default', ['build', 'start', 'serve']);

