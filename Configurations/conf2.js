let logger = require('../infrastructure/util/logger.js');
let jsonHelper = require('../infrastructure/helpers/json.helper');
let log4js = require('log4js');
exports.config = {
    // directConnect: true,

    // Capabilities to be passed to the webdriver instance.
   capabilities: {
     'browserName': 'chrome'
   },

    framework: 'jasmine2',
   seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['../src/test_spec/VerifyLoginFunction.js'],

    onPrepare: async function () {
        logger.configLog4js();
        //start browser with maximize size
        browser.driver.manage().window().maximize();

        //config for timeout interval
        if (browser.timeoutInterval === undefined)
            browser.timeoutInterval = 5000;

        //config for default try time
        if (browser.expectConditionRetryTime === undefined)
            browser.expectConditionRetryTime = 20;

        //Init and Add logger into browser
        browser.logger = log4js.getLogger('Logger');

        //default language
        if (browser.params.language === undefined)
            browser.params.language = jsonHelper.readConfig('defaultLanguage');
    },

    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 9999999,
    }


}

