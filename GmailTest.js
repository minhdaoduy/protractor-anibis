var Object = require('./Objects.json');
var using = require('jasmine-data-provider');

describe("Test gmail",function () {
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get(Object.testsiteurl);
        console.log("Test site UR: is: " + Object.testsiteurl);
    });

    // afterEach(function () {
    //    browser.close();
    //    browser.run();
    // });

    function plusProvider(){
        return [
            {username: Object.locator.userdetails.username1,password: Object.locator.userdetails.password1},
            {username: Object.locator.userdetails.username2,password: Object.locator.userdetails.password2}
            ];
    };

    using(plusProvider,function (data) {

        it("Validate user credentials",function () {

            browser.sleep(2000);
            element(by.xpath(Object.locator.loginpage.username)).sendKeys(data.username);
            browser.sleep(2000);
            element(by.id(Object.locator.loginpage.next)).click();
            browser.sleep(2000);
            element(by.xpath(Object.locator.loginpage.password)).sendKeys(data.password);
            browser.sleep(2000);

        });
    });


})