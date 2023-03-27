const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;

// Преобразуем JS файлы в один main.js

module.exports = function scripts() {
	return gulp.src('source/js/main.js')
		.pipe(concat('main.js'))
		.pipe(gulpif(argv.prod, babel({
      presets: ['@babel/env']
    })))
		.pipe(gulpif(argv.prod, uglify()))
		.pipe(gulp.dest('build/js'));
};
