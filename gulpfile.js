var gulp = require("gulp");
var webpack = require("gulp-webpack");

gulp.task("webpack", function(){
  gulp.src("js/app.js")
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest("dist/"));
});

gulp.task("default", function(){
  gulp.watch(["js/app.js", "css/*.css", "*.html", "partials/*.html"], ["webpack"]);
});
