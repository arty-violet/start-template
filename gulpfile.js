const gulp = require('gulp');
const clean = require('./gulp/tasks/clean');
const pug2html = require('./gulp/tasks/pug2html');
const scss2css = require('./gulp/tasks/scss2css');
const styleLibs = require('./gulp/tasks/styleLibs');
const scripts = require('./gulp/tasks/scripts');
const scriptLibs = require('./gulp/tasks/scriptLibs');
const fonts = require('./gulp/tasks/fonts');
const imageMinify = require('./gulp/tasks/imageMinify');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const spritePNG = require('./gulp/tasks/spritePNG');
const cleanWEBP = require('./gulp/tasks/cleanWEBP');
const createWEBP = require('./gulp/tasks/createWEBP');
const copyWEBP = require('./gulp/tasks/copyWEBP');
const server = require('./gulp/tasks/server');
const stylelint = require('./gulp/tasks/stylelint');
const stylefix = require('./gulp/tasks/stylefix');

const build = gulp.parallel(stylelint, pug2html, scss2css, styleLibs, scripts, scriptLibs, fonts, imageMinify, spritePNG, spriteSVG);

exports.default = gulp.series(
	clean,
	copyWEBP,
	build,
	server
);

exports.webp = gulp.series(
	cleanWEBP,
	createWEBP
);

exports.stylelint = stylelint;
exports.stylefix = stylefix;
