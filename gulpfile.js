const { watch, src, dest, parallel } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("cssnano");
const postcss = require("postcss");
const sourcemaps = require("gulp-sourcemaps");

function cssTask() {
  return (
    src("./_static/sass/**/*.scss", { allowEmpty: true })
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: "compressed" }))
      .on("error", sass.logError)
      // .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write("."))
      .pipe(dest("./css"))
  );
}

function watchFiles() {
  watch("./_static/sass/**/*.scss", parallel(cssTask));
}

exports.default = parallel(cssTask, watchFiles);
