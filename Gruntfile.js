module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Sass
        sass: {
            dist: {
                options: {
                  style: 'compressed'
                },
                files: {
                    'src/css/app.css' : 'src/scss/app.scss'
                }
            }
        },

		// JS
		uglify: {
			options: {
				mangle: false,
				compress: {
					drop_console: false
				}
			},
            my_target: {
                options: {
                    beautify: false
                },
                files: {
                    'builds/<%= pkg.name %>.min.js': [
                        'src/js/app.js'
                    ]
                }
            }
		},

		// CSS
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'builds/<%= pkg.name %>.min.css': [
						'src/css/app.css'
					]
				}
			}
		},

		// Watch END:
        watch: {
            css: {
                files: 'src/scss/*.scss',
                tasks: ['sass', 'cssmin']
            },
            js: {
                files: 'src/js/*.js',
                tasks: ['uglify']
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'watch' ]);
};
