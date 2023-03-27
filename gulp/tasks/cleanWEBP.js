const del = require('del');

// Полностью удаляем папку source/images/webp

module.exports = function cleanWEBP(cb) {
	return del('source/images/webp').then(() => {
		cb()
	})
};
