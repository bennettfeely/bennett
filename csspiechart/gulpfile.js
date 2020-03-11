gulp = require("gulp");
slim = require("gulp-slim");
htmlmin = require("gulp-htmlmin");
sass = require("gulp-sass");
autoprefixer = require("gulp-autoprefixer");
cssnano = require("gulp-cssnano");
browserSync = require("browser-sync");
rename = require("gulp-rename");

const path = require("path");
const fs = require("fs");

// BrowserSync
gulp.task("sync", function() {
  return browserSync({
    server: "dist"
  });
});

// Compile HTML
gulp.task("slim", function() {
  return gulp
    .src("src/slim/*.slim")
    .pipe(
      slim({
        pretty: true
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      })
    )
    .pipe(gulp.dest("./dist"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

// Compile HTML from a subfolder
gulp.task("slim-subfolder", function() {
  return gulp
    .src("src/slim/*/*.slim")
    .pipe(
      slim({
        pretty: true
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      })
    )
    .pipe(gulp.dest("./dist/"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

// Compile SCSS
gulp.task("scss", function() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(cssnano())
    .pipe(
      rename(function(path) {
        path.basename += ".min";
        path.extname = ".css";
      })
    )
    .pipe(gulp.dest("./dist/css"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

// Move JS
gulp.task("js", function() {
  browserSync.reload();
  // return gulp.pipe(
  //   browserSync.reload({
  //     stream: true
  //   })
  // );
});

gulp.task("default", function() {
  gulp.run("sync");

  gulp.watch("src/slim/*.slim", function() {
    return gulp.run("slim");
  });

  gulp.watch("src/slim/*/*.slim", function() {
    return gulp.run("slim-subfolder");
  });

  gulp.watch("src/scss/*.scss", function() {
    return gulp.run("scss");
  });

  gulp.watch("dist/js/*.js", function() {
    return gulp.run("js");
  });
});
