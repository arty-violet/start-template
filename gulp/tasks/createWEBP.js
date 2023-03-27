const gulp = require('gulp');
const webp = require('gulp-webp');

// Создаём и минифицируем изображения WEBP в папке source/images/webp

module.exports = function createWEBP() {
	return gulp.src([
			'source/images/**/*.{png,jpg}',
			'!source/images/sprite/**/*'
		])
		.pipe(webp({
			quality: 80
		}))
		.pipe(gulp.dest('source/images/webp'))
};
