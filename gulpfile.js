var gulp = require("gulp"),
  concat = require("gulp-concat"),
  prefix = require("gulp-autoprefixer"),
  sass = require("gulp-sass")(require("sass")),
  pug = require("gulp-pug"),
  livereload = require("gulp-livereload"),
  webp = require("gulp-webp"),
  cleanCSS = require("gulp-clean-css"),
  uglify = require("gulp-uglify"),
  babel = require("gulp-babel");
gulp.task("html", () => {
  return gulp
    .src("./project/index.pug")
    .pipe(pug())
    .pipe(gulp.dest("dist/"))
    .pipe(livereload());
});
gulp.task("scss", () => {
  return gulp
    .src("./project/css/*.scss")
    .pipe(sass())
    .pipe(concat("main.css"))
    .pipe(cleanCSS())
    .pipe(prefix("last 2 version"))
    .pipe(gulp.dest("./dist/css"))
    .pipe(gulp.dest("./project/css"))
    .pipe(livereload());
});
gulp.task("img", () => {
  return gulp
    .src("./project/img/*")
    .pipe(webp())
    .pipe(gulp.dest("./project/img"))
    .pipe(gulp.dest("./dist/img"));
});
gulp.task("js", () => {
  return gulp
    .src("./project/js/main.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))
    .pipe(livereload());
});
gulp.task("watch", () => {
  require("./index.js");
  livereload.listen();
  gulp.watch("./project/index.pug", gulp.series("html"));
  gulp.watch("./project/css/main.scss", gulp.series("scss"));
  gulp.watch("./project/scss/**/*.scss", gulp.series("scss"));
  gulp.watch("./project/js/main.js", gulp.series("js"));
});
