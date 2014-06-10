/*
 * grunt-realsync
 * http://softpagehomeware.com/
 *
 * Copyright (c) 2014 Softpagehomeware
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
	'use strict';
	
	var path = require('path');
	var fs = require('fs');

	grunt.registerMultiTask('realsync', 'Synchronize content of two directories', function() {
		console.log(this.src);
	});
};