module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'static/js/vendor/modernizr.custom.js',
                    'static/js/app.js',
                    'static/js/vendor/domReady.js',
                    'static/js/lib/*.js'

                ],
                dest: 'build/static/js/app.js'
            }
        },

        uglify: {
            build: {
                src: 'build/static/js/app.js',
                dest: 'build/static/js/app.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true, 
                    cwd: 'static/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/static/images/'
                }]
            }
        },

        clean: {
            dist: [
                'build/static/js/app.js',
                'build/static/js/app.min.js',
                'build/static/css/screen.css'
            ]
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        watch: {
            scripts: {
                files: [
                    'static/js/*.js', 
                    'static/js/lib/dropdown.js', 
                    'static/sass/**/*.scss'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat'); // concat js files
    grunt.loadNpmTasks('grunt-contrib-uglify'); // minify js files
    grunt.loadNpmTasks('grunt-contrib-imagemin'); // minify images
    grunt.loadNpmTasks('grunt-contrib-clean'); // clean files
    grunt.loadNpmTasks('grunt-contrib-compass'); // compass
    grunt.loadNpmTasks('grunt-contrib-watch'); // watch for changes

    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'imagemin', 'compass', 'watch']);
};
