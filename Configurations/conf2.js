exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
   // capabilities: {
   //   'browserName': 'chrome'
   //   //'browserName': 'firefox'
   // },

    framework: 'jasmine2',
   // seleniumAddress: 'http://localhost:4444/wd/hub',


    specs: ['../Excel/ExcelTest.js'],

    suites: {
        smoke: ['PageOjects/TestMachers.js'],
        regression: ['JasmineBasics.js'],
        functional: ['Banking.js'],
        all: ['CalculatorTest3.js'],
        selected: ['spec.js','FirstTest.js'],
    },

      multiCapabilities: [
//      {
//        browserName: 'firefox'
//      },
//       {
//         browserName: 'chrome'
//       },
        {
        // browserName: 'internet explorer'
            browserName: 'chrome'
      }],
    // jasmineNodeOpts: {
    //   defaultTimeoutInterval: 30000
    // },

    onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    }


}

