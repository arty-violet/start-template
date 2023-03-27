const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;

// Собираем библиотечные файлы CSS в один файл libs.css 

const cssLibs = [
	'source/.libs/normalize.css',
	// 'source/.libs/slick.css',
	// 'source/.libs/animate.css'
];

module.exports = function styleLibs(cb) {
  return cssLibs.length
    ? gulp.src(cssLibs)
      .pipe(concat('libs.css'))
			.pipe(gulpif(argv.prod, cleanCSS({
				debug: true,
				compatibility: '*'
			}, details => {
				console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
			})))
      .pipe(gulp.dest('build/css'))
    : cb();
};
