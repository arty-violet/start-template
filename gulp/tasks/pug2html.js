const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');

// Преобразуем index.pug в index.html

module.exports = function pug2html() {
	return gulp.src([
		'source/pug/index.pug',
		// 'source/pug/pages/*.pug'
	])
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('build'))
};

