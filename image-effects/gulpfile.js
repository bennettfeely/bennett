// Include plugins ===================================================================
  // Base
  var gulp = require('gulp');
  var replace = require('gulp-replace');
  var rename = require('gulp-rename');
  var fs = require('fs');

  // CSS
  var sass = require('gulp-sass');
  var autoprefixer = require('gulp-autoprefixer');
  var cssbeautify = require('gulp-cssbeautify');
  var cssnano = require('gulp-cssnano');

  // JS
  var uglify = require('gulp-uglifyjs');

  // HTML
  var haml = require('gulp-haml');
  var injectfile = require('gulp-inject-file');
  var prettify = require('gulp-prettify');
  var htmlmin = require('gulp-htmlmin');

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
gulp.task('haml', function () {
  gulp.src('_dev/index.haml')
    .pipe(haml())
    .pipe(injectfile({
        pattern: '<!--\\s*inject:<filename>-->'
    }))
    .pipe(prettify({
      indent_size: 2
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(''))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// Minify HTML =======================================================================
  gulp.task('html', function() {
    return gulp.src('_dev/*.html')
      .pipe(htmlmin({
        collapseWhitespace: true
      }))
      .pipe(gulp.dest(''))
      .pipe(browserSync.reload({
        stream: true
      }));
  });


// Compile style.scss ================================================================
  gulp.task('style_scss', function() {
      return gulp.src('_dev/style.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
          stream: true
        }));
  });


// Compile all.scss ==================================================================
  gulp.task('all_scss', function() {
      return gulp.src('_dev/all.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssbeautify({
          indent: '   ',
          autosemicolon: true
        }))
        .pipe(rename('all.css'))
        .pipe(gulp.dest('css'))
        .pipe(cssnano())
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
          stream: true
        }));
  });


// Compile SCSS, Minify CSS ==========================================================
  gulp.task('partials_scss', function() {
      return gulp.src('_dev/partials/*.scss')
        .pipe(sass(
          {outputStyle: 'expanded'}
          )).on('error', sass.logError)
        // .pipe(autoprefixer({
        //     browsers: ['last 2 versions'],
        //     cascade: false
        // }))
        // .pipe(cssbeautify({
        //   indent: '   ',
        //   autosemicolon: true
        // }))
        // .pipe(cssnano())
        // .pipe(rename('style.css'))
        .pipe(gulp.dest('_dev/partials'))
        .pipe(browserSync.reload({
          stream: true
        }));
  });


// Minify JS =========================================================================
  gulp.task('js', function() {
    gulp.src('_dev/js/*.js')
      //.pipe(uglify())
      .pipe(gulp.dest('js'))
      .pipe(browserSync.reload({
        stream: true
      }));
  });


// Watch Files For Changes ===========================================================
  gulp.task('watch', ['sync'], function() {
      gulp.watch('_dev/*.haml', ['haml']);
      // gulp.watch('_dev/*.html', ['html']);

      gulp.watch('_dev/all.scss', ['all_scss', 'style_scss', 'haml']);
      gulp.watch('_dev/style.scss', ['style_scss', 'haml']);
      gulp.watch('_dev/partials/*.scss', ['partials_scss', 'style_scss', 'all_scss', 'haml']);
      // gulp.watch('_dev/*.css', ['css']);

      gulp.watch('_dev/js/*.js', ['js']);
  });


// Default Task ======================================================================
  gulp.task('default', ['watch']);


