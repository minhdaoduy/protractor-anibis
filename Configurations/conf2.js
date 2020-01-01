exports.config = {
    // directConnect: true,

    // Capabilities to be passed to the webdriver instance.
   capabilities: {
     'browserName': 'chrome'
   },

    framework: 'jasmine2',
   seleniumAddress: 'http://localhost:4444/wd/hub',


    specs: ['LocatoryByModel.js'],

    suites: {
        test: ['src/test_spec/VerifyLoginFunction.js'],
    },

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

