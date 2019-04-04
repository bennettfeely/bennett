'use strict';
module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        htmlmin: {
          dist: {
            options: {
              removeComments: true,
              collapseWhitespace: true,
              minifyJS: true
            },
            files: {
              'index.html' : 'dev/index.html'
            }
          }
        },
        uglify: {
          my_target: {
            options : {
              compress: {
                drop_console: true
              }
            },
            files: {
              'clip.min.js': ['dev/clip.js']
            }
          }
        },
        sass: {
            dist: {
                files: {
                    'dev/style.css' : 'dev/style.scss'
                }
            }
        },
        autoprefixer: {
            options: {
              browsers: ['last 3 version']
            },
            dist: {
                files: {
                    'dev/style.css' : 'dev/style.css'
                }
            }
        },
        remfallback: {
          options: {
            log: false,
            replace: false
          },
          your_target: {
            files: {
              // 'Sites/dev/style.ie8.css': ['sites/dev/style.css']
            }
          }
        },
        cssmin: {
            add_banner: {
                options: {
                    report: true,
                    banner: '/* \nBennett Feely\nhttp://bennettfeely.com \n*/'
                },
                files: {
                    'style.min.css' : ['dev/style.css']
                }
            }
        },
        watch: {
          options: {
              livereload: false
          },
          html : {
            files: ['dev/index.html'],
            tasks: ['htmlmin']
          },
          scripts : {
            files: ['dev/clip.js'],
            tasks: ['uglify']
          },
          sass: {
              files: ['dev/style.scss'],
              tasks: ['sass','autoprefixer','cssmin'],
              options: {
                livereload: false
              },
          },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-remfallback');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ["watch"]);
};

