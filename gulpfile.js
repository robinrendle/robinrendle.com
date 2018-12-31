var gulp = require("gulp"),
  shell = require("gulp-shell"),
  jshint = require("gulp-jshint"),
  browserSync = require("browser-sync").create(),
  autoprefixer = require("gulp-autoprefixer"),
  sass = require("gulp-sass"),
  imagemin = require("gulp-imagemin"),
  pngquant = require("imagemin-pngquant"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  log = require('fancy-log'),
  jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll',
  cp = require("child_process");


////////////////////////////////////////////////////////////////
// SCSS / JS
////////////////////////////////////////////////////////////////

// gulp.task("scripts", function() {
//   gulp
//     .src([
//       './_static/js/lib/*.js',
//       './_static/js/app.js'
//     ])
//     .pipe(uglify())
//     .pipe(gulp.dest('js'))
//     .pipe(browserSync.reload({ stream: true }));
//   gulp
//     .src(['./_static/js/lib/prism.js'])
//     .pipe(uglify())
//     .pipe(gulp.dest('js'))
//     .pipe(browserSync.reload({ stream: true }));
// });


var paths = {
  styles: {
    src: '_static/sass/**/*.scss',
    dest: '_site/css',
    destsecond: 'css'
  },
  images: {
    src: '_static/images/**/*.*',
    dest: 'build/images'
  }
};

function style() {
  return gulp.src(paths.styles.src)
    .pipe(sass({
       includePaths: ['scss'],
       outputStyle: 'expanded',
       onError: browserSync.notify
    }))
    .pipe(autoprefixer(['last 3 versions', '> 1%', 'ie 9'], { cascade: true }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(paths.styles.destsecond));
}

function images(cb) {
  return gulp.src(paths.images.src)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.images.dest)).on('error', cb);
}

function browserSyncServe(done) {
  browserSync.init({
    server: {
      baseDir: "_site"
    }
  })
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function jekyllBuild() {
  return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
}

function watch() {
  gulp.watch(paths.styles.src, style)
  gulp.watch(paths.images.src, images)
  gulp.watch(
    [
    '*.html',
    '_layouts/*.html',
    '/**.*.html',
    '_includes/*.html',
    '_projects/*.markdown',
    '_posts/*'
  ],
  gulp.series(jekyllBuild, browserSyncReload));
}

gulp.task('default', gulp.parallel(jekyllBuild, browserSyncServe, watch));
