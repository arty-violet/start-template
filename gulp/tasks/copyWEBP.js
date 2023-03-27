const gulp = require('gulp');

// Копируем все изображения WEBP из папки source в build

module.exports = function copyWEBP() {
	return gulp.src('source/images/**/*.webp')
		.pipe(gulp.dest('build/img'))
};
