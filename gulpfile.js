const gulp = require("gulp");
const git = require("gulp-git");
const del = require("del");
const slim = require("gulp-slim");
const htmlmin = require("gulp-htmlmin");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const browserSync = require("browser-sync").create();
const rename = require("gulp-rename");

// Repos as folders ----------------------------------------------------
let repos = [
	"antiweather",
	"clippy",
	"csscreatures",
	"csspiechart",
	"flexplorer",
	"gradients",
	"image-effects",
	"scales",
	"soteria",
	"trumptalk",
	"usacss",
	"ztext",
];

gulp.task("clean", () => {
	return del(repos);
});

gulp.task("clone", async () => {
	repos.forEach((repo) => {
		let git_url = "https://github.com/bennettfeely/" + repo;

		git.clone(git_url, (err) => {
			if (err) throw err;
		});
	});
});

gulp.task("build", gulp.series("clean", "clone"));

// Homepage ------------------------------------------------------------
// gulp.task("sync", () => {
// 	console.log("sync");

// 	return browserSync.init({
// 		server: {
// 			baseDir: "",
// 		},
// 	});
// });

gulp.task("slim", () => {
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
		.pipe(gulp.dest("./"))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

gulp.task("scss", () => {
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

gulp.task("default", () => {
	browserSync.init({
		server: {
			baseDir: "./",
		},
	});

	gulp.watch(["_src/*.slim"], gulp.series(["slim"]));
	gulp.watch(["_src/scss/*.scss"], gulp.series(["scss"]));
});
