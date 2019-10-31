const gulp = require("gulp");
const prefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean-css");
const webpack = require("webpack-stream");
const wpConfig = require("./webpack.config");


gulp.task("build-css", () => {
    return gulp.src(__dirname + "/css/index.css")
        .pipe(prefixer())
        .pipe(clean())
        .pipe(gulp.dest(__dirname + "/dist/"));

});
gulp.task("build-js", () => {
   return gulp.src(__dirname + "/js/swapi.js")
       .pipe(webpack(wpConfig))
       .pipe(gulp.dest(__dirname + "/dist"));
});

gulp.task("watch", () => {
    gulp.watch(["_node.js"], gulp.series("build-js"));
   return gulp.watch(["css/*.css"], gulp.series("build-css"));
});

gulp.task("default", gulp.series("build-css", "watch","build-js"));
