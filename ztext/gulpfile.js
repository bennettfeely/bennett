// Plugins =============================================================
const gulp = require("gulp");
const pump = require("pump");
const rename = require("gulp-rename");

// Sync
const browserSync = require("browser-sync");

// HTML
const slim = require("gulp-slim");
const htmlmin = require("gulp-htmlmin");

// CSS
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");

// JS
const terser = require("gulp-terser");
const size = require("gulp-size");

// Browser Sync ========================================================
gulp.task("sync", function () {
	return browserSync({
		server: "",
	});
});

// Refresh =============================================================
gulp.task("refresh", function () {
	return gulp.src("*").pipe(
		browserSync.reload({
			stream: true,
		})
	);
});

// Compile HTML ========================================================
gulp.task("html", function () {
	return gulp
		.src("src/*.slim")
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

// Compile CSS =========================================================
gulp.task("css", function () {
	return gulp
		.src("src/css/*.scss")
		.pipe(sass())
		.on("error", sass.logError)
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions"],
				cascade: false,
			})
		)
		.pipe(cssmin())
		.pipe(
			rename(function (path) {
				path.basename += ".min";
				path.extname = ".css";
			})
		)
		.pipe(gulp.dest("css"))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

// JS ==================================================================
gulp.task("js", function () {
	return gulp
		.src("src/js/*.js")
		.pipe(terser())
		.pipe(
			rename(function (path) {
				path.basename += ".min";
				path.extname = ".js";
			})
		)
		.pipe(gulp.dest("js"))
		.pipe(
			size({
				showFiles: true,
			})
		)
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

// Watch ===============================================================
gulp.task("watch", ["sync"], function () {
	gulp.watch("src/*.slim", ["html"]);
	gulp.watch("src/js/*.js", ["js"]);
	gulp.watch("src/css/*.scss", ["css"]);
});

// Default task ========================================================
gulp.task("default", ["watch"]);
