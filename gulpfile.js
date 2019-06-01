var gulp = require('gulp'),
  sass = require('gulp-sass'),
  jshint = require('gulp-jshint'),
  autoprefixer = require('gulp-autoprefixer'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  log = require('fancy-log'),
  size = require('gulp-size'),
  changed = require('gulp-changed'),
  imagemin = require('gulp-imagemin'),
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

gulp.task('images', function() {
   var imgSrc = ['./images/*.+(png|jpg|gif|svg)', './images/**/*.+(png|jpg|gif|svg)'];
   imgDst = '_site/images';

   gulp.src(imgSrc)
   .pipe(changed(imgDst))
   .pipe(imagemin())
   .pipe(gulp.dest(imgDst));
});

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
  gulp.watch([paths.styles.src, '_static/sass/**/**/*.scss', '_static/sass/**/**/*.scss'], gulp.parallel('css'))
  gulp.watch('./static/js/**/*.js', gulp.parallel('js'))
});

gulp.task('build', gulp.parallel(
  'css',
  'js',
  'images'
));

gulp.task('dev', gulp.parallel(
  'build',
  'watch'
));

gulp.task('serve', serve({
  root: '_static',
  port: 8008,
}));
