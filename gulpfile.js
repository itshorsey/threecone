// move the html

// compile the js

// watch the files

// default task

var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var webpack = require("webpack-stream");

gulp.task("html", function(){
    gulp.src("src/*.html")
        .pipe(gulp.dest("dist"))
});

gulp.task("js", function(){
    gulp.src("src/js/app.js")
        .pipe(
            webpack({
            mode: "production",
            devtool: "source-map",
            output: {
                filename: "app.js"
            }
        })
    )
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function(){
    browserSync.init({
        server : {
            baseDir: "./dist"
        }
    });
    gulp.watch("src/*.html").on("change", browserSync.reload());
    gulp.watch("src/js/*", ["js"]);
});

gulp.task("default", ["html", "js", "watch"]);