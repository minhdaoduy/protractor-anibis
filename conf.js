let HtmlReporter = require('protractor-beautiful-reporter');
let Testrail = require('testrail-api');
let jsonHelper = require('./infrastructure/helpers/json.helper.js');
let path = require('path');
let log4js = require('log4js');
let fs = require('fs');
let winston = require('winston');
let q = require('q');
const currentDate = new Date(),
day = currentDate.getDate(),
month = currentDate.getMonth(),
year = currentDate.getFullYear(),
hour = currentDate.getHours(),
minute = currentDate.getMinutes(),
second = currentDate.getSeconds(),
millisecond = currentDate.getMilliseconds();
const reportFol = 'report_' + day + "." + month + "." + year + "." + hour + "." + minute + "." + second + "." + millisecond;
exports.config = {
    params: {
        reportLocation: '',
        lstTestCaseId: []
    },
   // seleniumAddress: 'http://localhost:4444/wd/hub',
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
         prefs: {
             'download': {
                 'prompt_for_download': false,
                 'default_directory': 'C:\\DataExport',
                 'directory_upgrade': true
             }
         }
     }
   },

    framework: 'jasmine2',

    suites: {
        smoke: ['CalculatorTest.js'],
    },

    SELENIUM_PROMISE_MANAGER: true,
    restartBrowserBetweenTests: false,

    onPrepare: async function () {
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

        //Add screenshot to report
        jasmine.getEnv().addReporter(new HtmlReporter({
            preserveDirectory: true,
            takeScreenShotsOnlyForFailedSpecs: true,
            docTitle: 'Acuity',
            screenshotsSubfolder: 'image',
            jsonSubfolder: 'json',
            baseDirectory: jsonHelper.readConfig('reportDir'),
            pathBuilder: function pathBuilder (spec, description, result, capabilities) {
                let validDescriptions = description.map(function (description) {
                    return description.replace(/\//g, '@');
                })

                return path.join(
                    reportFol,
                    validDescriptions.join('-')
                );
            }
        }).getJasmine2Reporter());

        browser.params.reportLocation = jsonHelper.readConfig('reportDir') + '/' + reportFol;
    },

    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 9999999,
    }
};

