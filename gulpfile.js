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
    watch = require('gulp-watch');

gulp.task('images', function(cb){
    gulp.src(['static/images/**/*.png','static/images/**/*.jpg', 'static/images/**/*.gif','static/images/**/*.jpeg'])
        .pipe(imageop({
            optimizationLevel: 6,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('build/images/')).on('error', cb)
        .pipe(gulp.dest('build/images'));
});

// gulp.task('scripts', function() {
//     gulp.src([
//             'static/js/lib/*.js'])
//         .pipe(concat('app.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('build/js'));
// });

// Compiles scss into the build/css dir
gulp.task('sass', function(){
    gulp.src('./static/sass/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(prefix())
        .pipe(gulp.dest('./build/css'))
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
    gulp.watch('./static/js/*.js', ['lint', 'scripts']);
    gulp.watch('./static/sass/**/*.scss', ['sass']);
    gulp.watch('./static/sass/*.scss', ['sass']);
    gulp.watch('./build/css/screen.css', ['minify']);
});

gulp.task('build', ['images', 'minify', 'sass']);

gulp.task('default', ['build', 'start']);

