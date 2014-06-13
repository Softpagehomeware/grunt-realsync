# grunt-realsync v0.0.1

> A grunt task to keep directories in sync. It is very similar to grunt-contrib-copy but tries to copy only those files that has actually changed. It will also delete files they are not there anymore.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-realsync --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-realsync');
```

### Usage examples

```javascript
grunt.initConfig({

  realsync: {
    main: {
      cwd: 'src',
      filter: ['isFile'], /* Includes only files */
      src: [
        '**', /* Include everything */
        '!**/*.txt' /* but exclude txt files */
      ],
      dest: 'bin',
    },
  }
});

  grunt.loadNpmTasks('grunt-realsync');
  grunt.registerTask('default', 'realsync');
```