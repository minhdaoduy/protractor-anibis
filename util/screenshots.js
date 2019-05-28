
// at the top of the test spec:
var fs = require('fs');
var dt = require('../util/DateTime.js');

// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

// ...

// within a test:


describe("Test entering into an input box", function(){

    it("right click mouse",function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        browser.sleep(3000);
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, '../images/' + dt.localTime_date_full('7') + '.png');
        });
        browser.sleep(5000);
        // browser.wait(until.presenceOf(element(by.buttonText("Customer Login"))), 50000, 'Element taking too long to appear in the DOM');

    });



});