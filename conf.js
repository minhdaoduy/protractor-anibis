let HtmlReporter = require('protractor-beautiful-reporter');
let Testrail = require('testrail-api');
let jsonHelper = require();
let path = require('path');
let log4js = require('log4js');
let fs = require('fs');
let winston = require('winston');
let q = require('q');
const levels = { 
    error: 0, 
    warn: 1, 
    info: 2, 
    verbose: 3, 
    debug: 4, 
    silly: 5 
  };
const { createLogger, format, transports } = require('winston');
const {  timestamp,combine, label, prettyPrint } = format;
exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
   capabilities: {
     browserName: 'chrome',
     ignoreProtectedModeSettings: true,
     ignoreZoomSetting: true,
     requireWindowFocus: true,
     javascriptEnable: true,
     shardTestFiles: true,
     chromeOptions: {
         useAutomationExtension: false,
     }
   },

    framework: 'jasmine2',
   // seleniumAddress: 'http://localhost:4444/wd/hub',

    suites: {
        smoke: ['CalculatorTest.js'],
    },

    SELENIUM_PROMISE_MANAGER: true,
    restartBrowserBetweenTests: false,

    onPrepare: async function () {
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

        log4js.configure({
            appenders: {
                klog: {
                    type: "file",
                    filename: jsonHelper.readConfig('reportDir') + '/' + reportFol + '/logs/ExecutionLog.log'
                },
                kprolog: {
                    type: 'log4js-protractor-appender'
                }
            },
            categories: {
                default: {
                    appenders: ['klog', 'kprolog'],
                    level: 'all'
                }
            }
        });

        //start browser with maximize size
        browser.driver.manage().window().maximize();

        //config for timeout interval
        browser.timeoutInterval = 5000;

        //Config for retrying times to wait for web element control with condition
        browser.expectConditionRetryTime = 5;

        //Config for retrying times to take an action on web element control
        browser.actionRetryTime = 2;

        //Init and Add logger into browser
        browser.logger = log4js.getLogger('Logger');

    }


}

