var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    watch = require('gulp-watch'),
    cp = require('child_process'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    paths = {
        styles: {
            src:   "_static/sass/screen.scss",
            dest:  "css",
            typography: "_static/sass/new-web-typography.scss",
            futures: "_static/sass/futures-of-typography.scss",
            lexicon: "_static/sass/visual-lexicon.scss",
            watch: ["_static/sass/*.*", "_static/sass/**/*.*"],
        },
        images: {
            src:   [
                "static/images/*.png",
                "static/images/**/*.png",
                "static/images/*.jpg",
                "static/images/**/*.jpg",
            ],
            dest:  "images/"
        },
        scripts: {
            libs: [
                "/_static/js/modules/*.js",
                "/_static/js/libs/*.js"
            ],
            src: [
                "static/js/app.js"
            ],
            dest: "js"
        },
        watch: [
            "_layouts/*.html",
            "_includes/*.html",
        ],
    };

// Concats + minifies JS
gulp.task('scripts', function() {
    gulp.src([
            '_static/js/lib/*.js',
            '_static/js/modules/dropdown.js',
            '_static/js/app.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(reload({stream: true}))
    gulp.src([
        '._static/js/lib/prism.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(reload({stream: true}))
});


gulp.task('images', function(cb){
    return gulp.src(['_static/images/*.*', '_static/images/**/*.*', '_static/images/**/**/*.*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build/images')).on('error', cb)
});


var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'scripts', 'jekyll-build'], function() {
    browserSync({
      proxy: "localhost:4000",
        files: [
          '_site/css/*.css',
          '_site/*.html',
          '_site/**/*.html',
          '!_site/node_modules/*.html'
        ]
    });
    gulp.watch(["_static/sass/*.scss", "_static/sass/**/*.scss"], ['sass']);
});

gulp.task('watch', function () {
    gulp.watch(['_static/sass/*.scss', '_static/sass/**/*.scss'], ['sass']);
    gulp.watch(['*.html', '*/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('sass', function () {
    gulp.src(paths.styles.src)
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(['last 3 versions', '> 1%', 'ie 9'], { cascade: true }))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'))
        .pipe(gulp.dest('_site/css'));
    gulp.src(paths.styles.futures)
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(['last 3 versions', '> 1%', 'ie 9'], { cascade: true }))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'))
});

// gulp.task('work', function(){
//     gulp.src('_static/sass/work.scss')
//         .pipe(sass({
//             includePaths: ['scss'],
//             onError: browserSync.notify,
//             outputStyle: 'compressed'
//         }))
//         .pipe(autoprefixer(['last 3 versions', '> 1%', 'ie 9'], { cascade: true }))
//         .pipe(browserSync.reload({stream:true}))
//         .pipe(gulp.dest('css'))

//     gulp.src([
//         '_static/js/lib/ff-observer.js'
//     ])
//         .pipe(uglify())
//         .pipe(concat('min.ff-observer.js'))
//         .pipe(gulp.dest('js'))
//         .pipe(reload({stream: true}))
// });


gulp.task('build', [''])

gulp.task('default', ['images', 'sass', 'watch', 'scripts', 'browser-sync']);
