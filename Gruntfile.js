module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-coveralls');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['dist/**', 'coverage'],

    copy: {
      dist: {
        files: [ {
            src: 'meaty.js',
            dest: 'dist/meaty.js'
        }]
      }
    },

    coveralls: {
      options: {
        force: false
      },
      unit: {
        src: 'coverage/*/lcov.info'
      }
   },

    jshint: {
      build: ['Gruntfile.js'],
      src: ['meaty.js', 'meaty_test.js'],
      dist: 'dist/meaty.js',
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS'],
        coverageReporter: {
          type : 'lcov',
          dir : 'coverage/'
        }
      }
    },

    uglify: {
      dist: {
        options: {
        },
        files: {
          'dist/meaty.min.js': 'meaty.js',
        }
      }
    },

  });

  grunt.registerTask('build', ['uglify:dist', 'copy:dist', 'jshint:dist']);
  grunt.registerTask('test', ['jshint:src', 'karma']);
  grunt.registerTask('default', ['test', 'build']);
};
