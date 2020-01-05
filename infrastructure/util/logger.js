let log4js = require('log4js');
let jsonHelper = require('../helpers/json.helper');
const currentDate = new Date(),
    day = currentDate.getDate(),
    month = currentDate.getMonth(),
    year = currentDate.getFullYear(),
    hour = currentDate.getHours(),
    minute = currentDate.getMinutes(),
    second = currentDate.getSeconds(),
    millisecond = currentDate.getMilliseconds();
const reportFol = 'report_' + day + "." + month + "." + year + "." + hour + "." + minute + "." + second + "." + millisecond;

class logger {
    configLog4js() {
        return log4js.configure({
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
    }
};

module.exports = new logger();
