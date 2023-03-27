const gulp = require('gulp');
const imageMinify = require('./imageMinify');
const spriteSVG = require('./spriteSVG');
const spritePNG = require('./spritePNG');
const copyWEBP = require('./copyWEBP');
const pug2html = require('./pug2html');
const scss2css = require('./scss2css');
const scripts = require('./scripts');
const stylelint = require('./stylelint');
const browserSync = require('browser-sync').create();

// Запускаем сервер и следим за файлами

module.exports = function server(cb) {
	browserSync.init({
		server: 'build',
		notify: false,
		online: true,
		open: true,
		cors: true
	});

	gulp.watch('source/images/**/*.{gif,png,jpg,svg,ico}', gulp.series(imageMinify)).on('change', browserSync.reload);
	gulp.watch('source/images/sprite/svg/*.svg', gulp.series(spriteSVG)).on('change', browserSync.reload);
	gulp.watch('source/images/sprite/png/*.png', gulp.series(spritePNG)).on('change', browserSync.reload);
	gulp.watch('source/images/**/*.webp', gulp.series(copyWEBP)).on('change', browserSync.reload);
	gulp.watch('source/pug/**/*.pug', gulp.series(pug2html));
	gulp.watch('source/js/**/*.js', gulp.series(scripts)).on('change', browserSync.reload);
	gulp.watch(['source/scss/**/*.scss'], gulp.series(scss2css)).on('change', browserSync.reload);
	gulp.watch(['source/scss/**/*.scss'], gulp.series(stylelint)).on('change', browserSync.reload);
	gulp.watch('build/**/*.html').on('change', browserSync.reload);

	return cb()
};
