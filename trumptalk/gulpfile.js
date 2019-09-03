// Include plugins ===================================================================
  // Base
  var gulp = require('gulp');
  var replace = require('gulp-replace');
  var rename = require('gulp-rename');
  var pump = require('pump')
  var fs = require('fs');
  // CSS
  var sass = require('gulp-sass');
  var autoprefixer = require('gulp-autoprefixer');
  var cssbeautify = require('gulp-cssbeautify');
  var cssnano = require('gulp-cssnano');
  // HTML
  var haml = require('gulp-haml');
  var htmlmin = require('gulp-htmlmin');
  var injectfile = require('gulp-inject-file');
  // JS
  var uglify = require('gulp-uglify');
  // Sync
  var browserSync = require('browser-sync');


// Browser Sync ======================================================================
  gulp.task('sync', function() {
    browserSync({
      server: {
        baseDir: ''
      },
    })
  });


// Compile HAML =======================================================================
gulp.task('html', function () {
  gulp.src('_dev/html/*.haml')
    .pipe(haml())
    .pipe(injectfile({
        pattern: '<!--\\s*inject:<filename>-->'
    }))
    .pipe(gulp.dest('_dev/html'))
    .pipe(rename('index.html'))
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(''))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// Minify SVG +=======================================================================
gulp.task('svg', function () {
  gulp.src('_dev/img/*.svg')
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('img'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// Compile style.scss ================================================================
  gulp.task('css', function() {
      return gulp.src('_dev/css/*.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest(''))
        .pipe(cssnano())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
          stream: true
        }));
  });


// Minify JS =========================================================================
  gulp.task('js', function (cb) {
    pump([
      gulp.src('_dev/js/*.js'),
      uglify(),
      gulp.dest('js')
    ],
    cb
    );
  });


// Watch Files For Changes ===========================================================
  gulp.task('watch', ['sync'], function() {
      gulp.watch('_dev/img/*.svg', ['svg']);
      gulp.watch('_dev/html/*.haml', ['html']);
      gulp.watch('_dev/css/*.scss', ['html', 'css']);
      gulp.watch('_dev/js/*.js', ['js']);
  });


// Default Task ======================================================================
  gulp.task('default', ['watch']);

