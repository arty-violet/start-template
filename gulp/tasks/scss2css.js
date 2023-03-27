const gulp = require('gulp');
const plumber = require('gulp-plumber');
const scss = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;

// Преобразуем style.scss в style.css

module.exports = function scss2css() {
	return gulp.src('source/scss/style.scss')
		.pipe(plumber())
		.pipe(scss({
			outputStyle: 'expanded'
		}))
		.pipe(gulpif(argv.prod, autoprefixer({
			grid: true,
			cascade: true
		})))
		.pipe(gulpif(argv.prod, cleanCSS({
			debug: true,
			compatibility: '*'
		}, details => {
			console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
		})))
    .pipe(plumber.stop())
		.pipe(gulp.dest('build/css'))
};
