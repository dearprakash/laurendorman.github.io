module.exports = function(grunt){
  grunt.initConfig({
    _clean: {
      tmp: ['tmp']
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.renameTask('clean', '_clean');
  
  grunt.registerTask('clean', ['_clean']);
};