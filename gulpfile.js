var gulp = require('gulp');
    var jshint = require('gulp-jshint');
    var compass = require('gulp-compass');
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    var uglifycss = require('gulp-uglifycss');
    var rename = require('gulp-rename');
    var uncss = require('gulp-uncss');
    var imageop = require('gulp-image-optimization');

gulp.task('images', function(cb){
    gulp.src(['static/images/**/*.png','static/images/**/*.jpg', 'static/images/**/*.gif','static/images/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5, 
        progressive: true,
        interlaced: true
        })).pipe(gulp.dest('build/images/')).on('end', cb).on('error', cb);
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
                'http://robinrendle.com/work/nottinghamshire-council/'
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

gulp.task('default', ['images', 'scripts', 'compass', 'watch', 'work-css']);


