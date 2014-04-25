module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodemon: {
      dev: {
        script: './server/index.js'
      },
      debug: {
        script: './server/index.js',
        options: {
          nodeArgs: ['--debug']
        }
      }
    },

    watch: {
      scripts: {
        files: './app/**/*',
        options: {
          interrupt: true,
        },
      },
    },

    concurrent: {
      main: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      },

      debug: {
        tasks: ['nodemon:debug', 'watch', 'node-inspector'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    'node-inspector': {
      main: {}
    }
  });

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-node-inspector');

  grunt.registerTask('default', ['concurrent:debug']);
};
