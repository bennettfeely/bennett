// Include plugins ===================================================
var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync");
var cssmin = require("gulp-cssmin");
var htmlmin = require("gulp-htmlmin");
var markdown = require("gulp-markdown");
var pump = require("pump");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var slim = require("gulp-slim");
var size = require("gulp-size");
var uglify = require("gulp-uglify");

// Browser Sync ======================================================
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

// Compile Markdown ==================================================
gulp.task("markdown", function () {
	return gulp
		.src("src/*.md")
		.pipe(markdown())
		.pipe(rename("body.html"))
		.pipe(gulp.dest(""));
});

// Compile HTML ======================================================
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

// JS ================================================================
gulp.task("js", function () {
	return gulp
		.src("src/*.js")
		.pipe(
			rename(function (path) {
				path.basename += ".min";
				path.extname = ".js";
			})
		)
		.pipe(gulp.dest(""))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

// Compile CSS =======================================================
gulp.task("scss", function () {
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
		.pipe(cssmin())
		.pipe(
			rename(function (path) {
				path.basename += ".min";
				path.extname = ".css";
			})
		)
		.pipe(gulp.dest(""))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

// Compile CSS =======================================================
gulp.task("css", function () {
	return (
		gulp
			.src("src/*.css")
			.pipe(gulp.dest(""))
			.pipe(cssmin())
			.pipe(
				rename(function (path) {
					path.basename += ".min";
					path.extname = ".css";
				})
			)
			.pipe(gulp.dest(""))
			// .pipe(size({ pretty: false, showFiles: true, showTotal: true }))
			.pipe(
				browserSync.reload({
					stream: true,
				})
			)
	);
});

// Watch Files For Changes ===========================================
gulp.task("watch", ["sync"], function () {
	gulp.watch("src/*.slim", ["html"]);
	gulp.watch("src/*.js", ["js"]);
	gulp.watch("src/*.scss", ["scss"]);
	gulp.watch("src/*.css", ["css"]);
});

// Default Task ======================================================
gulp.task("default", ["watch"]);
