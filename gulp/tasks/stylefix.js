const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');

// Исправляем в файлах scss имеющиеся грамматические ошибки

module.exports = function stylefix() {
	return gulp.src(['source/**/*.scss', '!source/scss/style.scss', '!source/scss/utils/sprite.scss'])
		.pipe(gulpStylelint({
			fix: true
		}))
		.pipe(gulp.dest('source'));
};
