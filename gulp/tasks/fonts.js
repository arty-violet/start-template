const gulp = require('gulp');

// Копируем все шрифты из папки source в build

module.exports = function fonts() {
  return gulp.src('source/fonts/**/*.*')
    .pipe(gulp.dest('build/fonts'))
};
