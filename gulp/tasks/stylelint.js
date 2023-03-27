const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');

// Проверяем файлы scss на наличие грамматических ошибок

module.exports = function stylelint() {
	return gulp.src('source/**/*.scss')
		.pipe(gulpStylelint({
			failAfterError: false,
			reporters: [{
				formatter: 'string',
				console: true
			}]
		}));
}
