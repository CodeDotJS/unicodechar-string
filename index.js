'use strict';

module.exports = str => {
	return str.replace(/\\u[\dA-Fa-f]{4}/g, match => {
		return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
	});
};
