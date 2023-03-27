const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;

// Минифицируем и оптимизируем изображения

module.exports = function imageMinify() {
	return gulp.src(
		['source/images/**/*.{gif,png,jpg,svg,webp,ico}',
			'!source/images/sprite/**/*'
		]
	)
		.pipe(buffer())
		.pipe(gulpif(argv.prod, imagemin([
			imagemin.gifsicle({
				interlaced: true
			}),
			imagemin.mozjpeg({
				quality: 75,
				progressive: true
			}),
			imagemin.optipng({
				optimizationLevel: 5
			}),
			imagemin.svgo({
				plugins: [{
					removeViewBox: true
				},
				{
					cleanupIDs: false
				}
				]
			})
		])))
		.pipe(gulp.dest('build/img'));
};
