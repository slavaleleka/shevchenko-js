"use strict";

const gulp = require("gulp");
const babel = require("gulp-babel");
const replace = require("gulp-replace");
const minify = require("gulp-minify");
const request = require("request");
const fs = require("fs");

gulp.task("load:rules", () => {
    request("https://raw.githubusercontent.com/tooleks/shevchenko-rules/master/dist/rules.json")
        .pipe(fs.createWriteStream("./rules.json"));
});

gulp.task("build", () => {
    gulp.src(["./src/shevchenko.js"])
        .pipe(replace("[] /* gulp build:rules */", JSON.stringify(require("./rules"))))
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(gulp.dest("./dist/"));
});

gulp.task("minify", () => {
    gulp.src("./dist/shevchenko.js")
        .pipe(minify({
            ext: {
                src: ".js",
                min: ".min.js"
            }
        }))
        .pipe(gulp.dest("./dist/"));
});
