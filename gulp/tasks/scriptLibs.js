const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Собираем библиотечные файлы JS в один файл libs.js 

const jsLibs = [
  'source/.libs/svg4everybody.min.js',
  // 'source/.libs/jquery-3.5.0.min.js',
  // 'source/.libs/modernizr-custom.min.js',
  // 'source/.libs/slick.min.js',
  // 'source/.libs/wow.min.js'
];

module.exports = function scriptLibs(cb) {
  return jsLibs.length
    ? gulp.src(jsLibs)
			.pipe(concat('libs.js'))
			.pipe(babel({
				presets: ['@babel/env']
			}))
			.pipe(uglify())
      .pipe(gulp.dest('build/js'))
    : cb();
};
