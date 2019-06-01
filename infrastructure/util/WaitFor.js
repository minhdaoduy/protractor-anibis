var until = protractor.ExpectedConditions;

describe("Test entering into an input box", function(){

    it("right click mouse",function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");

        browser.wait(until.presenceOf(element(by.buttonText("Customer Login"))), 50000, 'Element taking too long to appear in the DOM');


    });



});