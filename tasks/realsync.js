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

	grunt.registerMultiTask('realsync',
			'Synchronize content of two directories', function() {
				var done = this.async();
				var data = this.data;
				
				var options = this.options({
					force: false
				});
				
				// delete all files not there anymore
				grunt.log.writeln("search for files to delete");
				var filesDeleted = false;
				grunt.file.expand({
					cwd : data.dest,
					filter : this.data.filter
				}, data.src).forEach(function(filename) {
					var srcFile = path.resolve(data.cwd, filename);
					var destFile = path.resolve(data.dest, filename);
					if(!fs.existsSync(srcFile)) {
						filesDeleted = true;
						grunt.log.ok(["delete file " + filename]);
						grunt.file.delete(destFile, options);
					}
				});
				if(!filesDeleted) {
					grunt.log.writeln("no files to delete");
				}
				
				// copy all the files which has changed
				grunt.log.writeln("search for files to update or create");
				var filesUpdatedOrCreated = false;
				this.files.forEach(function(filePair) {
					filePair.src.forEach(function(src) {
						var srcFilepath = path.resolve(data.cwd, src);
						var destFilepath = path.resolve(data.dest, src);
						
						if(!fs.existsSync(destFilepath)) {
							grunt.log.ok(["create file " + src]);
							filesUpdatedOrCreated = true;
							grunt.file.copy(srcFilepath, destFilepath, options);
						} else {
							var srcStat = fs.statSync(srcFilepath);
							var destStat = fs.statSync(destFilepath);
							if(srcStat.mtime.getTime() > destStat.mtime.getTime()) {
								filesUpdatedOrCreated = true;
								grunt.log.ok(["update file " + src]);
								grunt.file.copy(srcFilepath, destFilepath, options);							
							}
						}
					});
				});
				if(!filesUpdatedOrCreated) {
					grunt.log.writeln("no files to update or create");
				}

				done();
			});
};