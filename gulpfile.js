const { watch, src, dest, parallel } = require("gulp");
const sass = require("gulp-dart-sass");
const sourcemaps = require("gulp-sourcemaps");

function cssTask() {
  return (
    src("./_static/sass/**/*.scss", { allowEmpty: true })
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: "compressed" }))
      // .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write("."))
      .pipe(dest("./css"))
  );
}

function watchFiles() {
  watch("./_static/sass/**/*.scss", parallel(cssTask));
}

exports.default = parallel(cssTask, watchFiles);
