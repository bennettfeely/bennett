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

// Resize screenshots
var gm = require("gulp-gm");
var newer = require("gulp-newer");
var imagemin = require("gulp-imagemin");

gulp.task("resize", function () {
	gulp
		.src("_img/screenshots/*.*")
		.pipe(newer("small"))
		.pipe(
			gm(function (gmfile) {
				gmfile.setFormat("jpg").quality(90);
				return gmfile.resize(60, 45);
			})
		)
		.pipe(imagemin())
		.pipe(gulp.dest("small"));
});

// Repos as folders ----------------------------------------------------
let repos = [
	"antiweather",
	"brain",
	"clippy",
	"csscreatures",
	"csspiechart",
	"flexplorer",
	"gradients",
	"image-effects",
	"scales",
	// "soteria",
	"trumptalk",
	"usa-css",
	// "usa-2200", // problem being this is built in parcel
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
