// Include plugins ===================================================================
var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cssmin = require("gulp-cssmin");

var slim = require("gulp-slim");
var replacer = require("gulp-batch-replace");
var htmlmin = require("gulp-htmlmin");
var injectfile = require("gulp-inject-file");
var markdown = require("gulp-markdown");

var pump = require("pump");
var uglify = require("gulp-uglify");

var rename = require("gulp-rename");
var browserSync = require("browser-sync");

// Browser Sync ======================================================================
gulp.task("sync", function () {
  return browserSync({
    server: "",
  });
});

// Refresh ===========================================================
gulp.task("refresh", function () {
  return gulp.src("*").pipe(
    browserSync.reload({
      stream: true,
    })
  );
});

// Compile Markdown ==================================================================
gulp.task("markdown", function () {
  return gulp
    .src("src/*.md")
    .pipe(markdown())
    .pipe(rename("body.html"))
    .pipe(gulp.dest(""));
});

// Compile HTML ======================================================================
var attribute_fixer = [
  ['autoplay="autoplay"', "autoplay"],
  ['muted="muted"', "muted"],
  ['async="async"', "async"],
  ['loop="loop"', "loop"],
];

gulp.task("html", function () {
  return gulp
    .src("src/*.slim")
    .pipe(
      slim({
        pretty: true,
      })
    )
    .pipe(replacer(attribute_fixer))
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        // collapseInlineTagWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      })
    )
    .pipe(
      injectfile({
        pattern: "<!--{\\s*inject:<filename>}-->",
      })
    )
    .pipe(gulp.dest(""))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

// JS ================================================================================
gulp.task("js", function (cb) {
  pump([gulp.src("src/*.js"), uglify(), gulp.dest("")], cb)
    .pipe(rename("creatures.min.js"))
    .pipe(gulp.dest(""));
});

// Compile CSS =======================================================================
gulp.task("css", function () {
  return gulp
    .src("src/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(rename("style.css"))
    .pipe(cssmin())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest(""))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

// Watch Files For Changes ===========================================================
gulp.task("watch", ["sync"], function () {
  gulp.watch("src/*.md", ["markdown", "html"]);
  gulp.watch("src/*.slim", ["html"]);
  gulp.watch("src/*.js", ["js"]);
  gulp.watch("src/*.scss", ["css"]);
});

// Default Task ======================================================================
gulp.task("default", ["watch"]);
