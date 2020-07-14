// Include plugins ===================================================================
var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var browserSync = require("browser-sync");
var replace = require("gulp-replace");
var fs = require("fs");

// Browser Sync ======================================================================
gulp.task("sync", function () {
  browserSync({
    server: {
      baseDir: "",
    },
  });
});

// Minify HTML =======================================================================
gulp.task("html", function () {
  return (
    gulp
      .src("dev/*.html")
      // .pipe(
      //   replace(/<link [^>]* href="style.css">/, function (s) {
      //     var style = fs.readFileSync("style.css", "utf8");
      //     return "<style>" + style + "</style>";
      //   })
      // )
      .pipe(
        htmlmin({
          collapseWhitespace: true,
        })
      )
      .pipe(gulp.dest(""))
      .pipe(
        browserSync.reload({
          stream: true,
        })
      )
  );
});

// Compile SCSS, Minify CSS ==========================================================
gulp.task("scss", function () {
  return gulp
    .src("dev/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(cssnano())
    .pipe(rename("style.css"))
    .pipe(gulp.dest(""))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

// Minify JS =========================================================================
// gulp.task("js", function () {
//   gulp
//     .src("dev/js/*.css")
//     // .pipe(uglify())
//     .pipe(gulp.dest("js"))
//     .pipe(
//       browserSync.reload({
//         stream: true,
//       })
//     );
// });

// Minify Standalone CSS =============================================================
// gulp.task("css", function () {
//   return gulp
//     .src("dev/*.css")
//     .pipe(cssnano())
//     .pipe(gulp.dest(""))
//     .pipe(
//       browserSync.reload({
//         stream: true,
//       })
//     );
// });

// Watch Files For Changes ===========================================================
gulp.task("watch", ["sync"], function () {
  gulp.watch("dev/*.scss", ["scss"]);
  //   gulp.watch("dev/*.css", ["css"]);
  // gulp.watch("dev/*.js", ["js"]);
  gulp.watch("dev/*.html", ["html"]);
});

// Default Task ======================================================================
gulp.task("default", ["html", "scss", "watch"]);
