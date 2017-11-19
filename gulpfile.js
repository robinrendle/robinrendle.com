var gulp = require('gulp'),
    shell = require('gulp-shell'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cp = require('child_process');

    // rename = require('gulp-rename'),
    // size = require('gulp-size'),

// Concats + minifies JS
// gulp.task('scripts', function() {
//   gulp.src([
//     '_static/js/lib/*.js',
//     '_static/js/modules/dropdown.js',
//     '_static/js/app.js'
//   ])
//     .pipe(uglify())
//     .pipe(gulp.dest('js'))
//     .pipe(reload({stream: true}))
//   gulp.src([
//     '._static/js/lib/prism.js'
//     ])
//     .pipe(uglify())
//     .pipe(gulp.dest('js'))
//     .pipe(reload({stream: true}))
// });


// gulp.task('images', function(cb){
//     return gulp.src(['_static/images/*.*', '_static/images/**/*.*', '_static/images/**/**/*.*'])
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         }))
//         .pipe(gulp.dest('build/images')).on('error', cb)
// });


/**
 * Rebuild Jekyll & do page reload
 */
// gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
//     browserSync.reload();
// });

/**
 * Wait for jekyll-build, then launch the Server
 */

 // gulp.task('browser-sync', ['sass', 'scripts', 'jekyll-build'], function() {

 gulp.task('jekyll-dev', function (done) {
   return cp.spawn('jekyll', ['build', '--drafts', '--config', '_config.yml'], {stdio: 'inherit'})
  .on('close', done);
 });

 gulp.task('jekyll-rebuild', ['jekyll-dev'], function () {
   browserSync.reload();
 });


 gulp.task('browser-sync', ['sass', 'jekyll-dev'], function() {
   browserSync.init({
     server: "_site",
     port: 1234
   });
 });

gulp.task('sass', function() {
  gulp.src('_static/sass/*.scss')
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(autoprefixer(['last 3 versions', '> 1%', 'ie 9'], { cascade: true }))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch(['_static/sass/**/*.scss','_static/sass/*.scss'], ['sass']);
  gulp.watch(['*.html', '_layouts/*.html', '**.*.html', '_includes/*.html', '_posts/*'], ['jekyll-rebuild']);
});


// gulp.task('build', [''])

gulp.task('default', ['browser-sync', 'watch']);
