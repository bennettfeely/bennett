gulp = require("gulp");
jade = require("gulp-jade");
slim = require("gulp-slim");
htmlmin = require("gulp-htmlmin");
sass = require("gulp-sass");
autoprefixer = require("gulp-autoprefixer");
cssnano = require("gulp-cssnano");
browserSync = require("browser-sync");
rename = require("gulp-rename");
jsImport = require("gulp-js-import");
uglify = require("gulp-uglify");
concat = require("gulp-concat");

pump = require("pump");
path = require("path");
fs = require("fs");
del = require("del");

// Compile Jade to HTML ==================================================================
gulp.task("slim", function () {
  return gulp
    .src("_src/*.slim")
    .pipe(
      slim({
        pretty: true,
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      })
    )
    .pipe(gulp.dest(""))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("jade", function () {
  return gulp
    .src("_src/index.jade")
    .pipe(
      jade({
        pretty: true,
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      })
    )
    .pipe(gulp.dest("./"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

// Compile CSS ===========================================================================
gulp.task("scss", function () {
  return gulp
    .src("_src/scss/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(cssnano())
    .pipe(
      rename(function (path) {
        path.basename += ".min";
        path.extname = ".css";
      })
    )
    .pipe(gulp.dest("./"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

// Browser sync ==========================================================================
gulp.task("sync", function () {
  return browserSync({
    server: "",
  });
});

// Init ==================================================================================
gulp.task("default", function () {
  gulp.run("sync");

  gulp.watch(["_src/*.jade"], function () {
    return gulp.run("jade");
  });

  gulp.watch(["_src/*.slim"], function () {
    return gulp.run("slim");
  });

  gulp.watch(["_src/articles/*/*.jade"], function () {
    return gulp.run("jade-article");
  });

  gulp.watch("_src/scss/*.scss", function () {
    return gulp.run("scss");
  });
});
