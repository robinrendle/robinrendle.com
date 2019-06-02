var gulp = require('gulp'),
  sass = require('gulp-sass'),
  jshint = require('gulp-jshint'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  log = require('fancy-log'),
  changed = require('gulp-changed'),
  serve = require('gulp-serve');

var paths = {
  styles: {
    src: '_static/sass/**/*.scss',
    dest: '_site/css'
  },
  images: {
    src: '_static/images/**/*.*',
    dest: '_site/images'
  }
};

gulp.task('css', function() {
  return gulp.src(paths.styles.src)
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(autoprefixer(['last 3 versions', '> 1%', 'ie 9'], { cascade: true }))
    .pipe(gulp.dest(paths.styles.dest))
});

gulp.task('js', function() {
  return gulp.src("./_static/js/**/*.js")
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./_site/js'));
});

gulp.task('watch', function() {
  gulp.watch(['_static/sass/*.scss', '_static/sass/**/**/*.scss', '_static/sass/**/**/*.scss'], gulp.parallel('css'))
  gulp.watch('./static/js/**/*.js', gulp.parallel('js'))
});

gulp.task('build', gulp.parallel(
  'css',
  'js'
));

gulp.task('dev', gulp.parallel(
  'css',
  'js',
  'watch'
));

gulp.task('serve', serve({
  root: '_static',
  port: 8008,
}));
