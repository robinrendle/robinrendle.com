var gulp = require('gulp');
    var jshint = require('gulp-jshint');
    var compass = require('gulp-compass');
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    var uglifycss = require('gulp-uglifycss');
    var rename = require('gulp-rename');
    // var image = require('gulp-image'); -> this isn’t working right now



gulp.task('scripts', function() {
    gulp.src([
            'static/js/vendor/modernizr.custom.js',
            'static/js/app.js',
            'static/js/vendor/domReady.js',
            'static/js/lib/*.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('compass', function(){
    return gulp.src('static/sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: './build/css',
            sass: './static/sass'
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('build/css'));
});

// gulp.task('images', function () {
//   gulp.src('./static/images/*/**')
//     .pipe(image())
//     .pipe(gulp.dest('./build/images'));
// });


gulp.task('watch', function(){
    gulp.watch('static/js/*.js', ['lint', 'scripts']);
    gulp.watch('static/sass/**/*.scss', ['compass']);
    gulp.watch('static/sass/*.scss', ['compass']);
});

gulp.task('default', ['scripts', 'compass', 'watch']);


