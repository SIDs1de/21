const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
const webp = require('gulp-webp');
const newer = require('gulp-newer');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

function browsersync() {
  // Чтобы переставить работу с html на php
  // убрать пункт server полностью и раскомментить
  // proxy, поставить туда название папки из openserver
  browserSync.init({
    server: {
      baseDir: 'src',
    },
    // proxy: 'example.ru',
    notify: false,
  });
}

function cleanPublic() {
  return del('public');
}

function scripts() {
  return src(['src/js/*.js', '!src/js/main.min.js'])
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('src/js'))
    .pipe(browserSync.stream());
}

function styles() {
  return src('src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(scss({}).on('error', scss.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        grid: true,
      })
    )
    .pipe(dest('src/css'))
    .pipe(browserSync.stream());
}

function build() {
  return src(
    [
      'src/css/**/*.css',
      'src/fonts/**/*',
      'src/js/**/*.js',
      '!src/js/main.js',
      'src/*.html',
      'src/images/**/*',
      'src/videos/**/*'
    ],
    { base: 'src' }
  ).pipe(dest('public'));
}

function html() {
  return (
    src('src/html/main.*')
      .pipe(fileInclude())
      // удалить строчку index.html
      // и расскоментить index.php
      // .pipe(concat('index.php'))
      .pipe(concat('index.html'))
      .pipe(dest('src'))
      .pipe(browserSync.stream())
  );
}

function watching() {
  watch(['src/scss/**/*.scss'], styles);
  watch(['src/js/**/*.js', '!src/js/main.min.js'], scripts);
  watch(['src/**/*.{html,php}', '!src/index.{html,php}'], html);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.cleanPublic = cleanPublic;

exports.build = series(cleanPublic, build);
exports.default = parallel(html, styles, scripts, browsersync, watching);
