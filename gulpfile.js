var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    uncss = require('gulp-uncss'),
    webp = require('gulp-webp'),
    imageop = require('gulp-image-optimization');


gulp.task('images', function(cb){
    gulp.src(['static/images/**/*.png','static/images/**/*.jpg', 'static/images/**/*.gif','static/images/**/*.jpeg'])
        .pipe(imageop({
            optimizationLevel: 6,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('build/images/')).on('end', cb).on('error', cb)
        .pipe(webp())
        .pipe(gulp.dest('build/images'));
});

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
            css: 'build/css',
            sass: 'static/sass'
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('build/css'));
});

gulp.task('work-css', function(){
    return gulp.src('build/css/screen.css')
        .pipe(concat('work-styles.min.css'))
        .pipe(uncss({
            html: [
                'http://robinrendle.com/work',
                'http://robinrendle.com/work/erskine-design',
                'http://robinrendle.com/work/endsleigh',
                'http://robinrendle.com/work/nottinghamshire-council',
                'http://robinrendle.com/work/simon-campbell'
            ]
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function(){
    gulp.watch('static/js/*.js', ['lint', 'scripts']);
    gulp.watch('static/sass/**/*.scss', ['compass']);
    gulp.watch('static/sass/*.scss', ['compass']);
});

gulp.task('default', ['scripts', 'compass', 'watch', 'work-css']);

gulp.task('build', ['images']);
