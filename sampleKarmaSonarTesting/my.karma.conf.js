// Karma configuration
// Generated on Thu Aug 29 2013 16:32:12 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
  'lib/jquery-1.9.0.js',
  'lib/angular.js',
  'lib/angular-mocks.js',
  
  

  // our app
  'js/*.js',

  // tests
  'test/*.js',

  // templates
  'tpl/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
	reporters: ['progress', 'coverage','junit'],

    preprocessors: {
		  // generate js files from html templates
  'tpl/*.html': ['html2js'],
      'js/*.js': ['coverage'],
    },
    
    coverageReporter: {
  type : 'lcovonly',
  dir : 'target/karma-coverage'
    },


    // web server port
    port: 9876,
    
// cli runner port
runnerPort : 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
