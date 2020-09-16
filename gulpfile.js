// Тут подключаются библиотеки
const fs = require("fs");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const posthtml = require("gulp-posthtml");
const minify = require("gulp-minify");

// Clean
// Тут мы удаляем папку build и всё его содержимое
const clean = () => del('build');

const del = require('del');

// Style
// Тут мы берём наши LESS файлы и превращаем их в CSS, минифицируем и сохраняем в build/css
const styles = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// JS
// Тут мы берём наши JS файлы и минифицируем и сохраняем в build/js
const js = () => gulp.src("source/js/**/*.js")
  .pipe(minify())
  .pipe(gulp.dest("build/js"));
exports.js = js;

// HTML
// Тут мы берём наши HTML файлы и минифицируем и сохраняем в build
const html = () => gulp.src("source/*.html")
  .pipe(posthtml())
  .pipe(gulp.dest("build"));
exports.html = html;

// Fonts
// Тут мы берём наши шрифты и копируем в build/fonts
const fonts = () => gulp.src("source/fonts/**/*.{woff,woff2}").pipe(gulp.dest("build/fonts"));
exports.fonts = fonts;

// Image
// Тут мы берём наши киртинки и оптимизируем/минифицируем и сохраняем в build/img
const images = () => gulp.src("source/img/**/*.{png,jpg,svg}")
  .pipe(imagemin([
    imagemin.optipng({ optimizationLevel: 3 }),
    imagemin.mozjpeg({ progressive: true }),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest("build/img"));
exports.images = images;

// WebP
// Тут мы берём наши киртинки из build/img и превращам их в WebP
const webP = () => gulp.src("build/img/**/*.{png,jpg}")
  .pipe(webp({ quality: 90 }))
  .pipe(gulp.dest("build/img"));
exports.webp = webP;

// Server
const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher
const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series("styles"));
  gulp.watch("source/*.html", gulp.series(html, sync.reload));
}

// Скрипт сборки
const build = gulp.series(
  clean, fonts, js, images, webP, styles, html
)
exports.build = build;

// Скрипт запуска сервера
exports.start = gulp.series(
  build, server, watcher
);
