/*
 * grunt-realsync
 * http://softpagehomeware.com/
 *
 * Copyright (c) 2014 Sascha Thiel
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
	grunt.initConfig({
		// ----------------------------------------------------------------------------------------

		pkg : grunt.file.readJSON('package.json'),
		srcArray : [ 'css/**/*' ],

		// ----------------------------------------------------------------------------------------

		jshint : {
			dev: {
				files: {
					src: ['tasks/realsync.js']
				}
			}
		},

		// ----------------------------------------------------------------------------------------

		realsync : {
			dev: {
				cwd: "testData/fromFolder",
				filter: ['isFile'],
				src: ['**/*'],
				dest: "testData/toFolder"
			}
		}

	// ----------------------------------------------------------------------------------------
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('dev', [ 'jshint', 'realsync' ]);
};