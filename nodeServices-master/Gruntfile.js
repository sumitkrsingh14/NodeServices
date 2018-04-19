/**
 * Created by shubham.chaturvedi on 4/27/2016.
 */
module.exports = function (grunt) {

    grunt.initConfig({
        jshint:{
            file:['lib/**/*js', 'models/**/*.js']
        },
        watch:{
            files:['lib/**/*js', 'models/**/*.js'],
            tasks:['jshint']
        }
    });
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
}