var SelectWrapper = require("../util/select-wrapper.js");
var mySelect = new SelectWrapper(by.id("userSelect"));
var CurrencySelect = new SelectWrapper(by.id("currency"));
var locator = require("../util/customlocators.js");

describe("Automation BankManager Login functionality",function () {

    it("Login to the Bank Manager account",function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");

        element(by.ngClick("manager()")).click();

        browser.sleep(2000);

    });

    it("Validate Add Customer",function () {
        // debugger;
        element(by.ngClick("addCust()")).click();
        element(by.model('fName')).sendKeys("Ramna");
        element(by.model('lName')).sendKeys("Arora");
        element(by.model('postCd')).sendKeys("110095");


        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(element(by.model('postCd123'))), 50000, 'Element taking too long to appear in the DOM');


        element(by.css(".btn.btn-default")).click();
        browser.sleep(2000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function (value) {
            console.log(value);
        });

        alertDialog.accept();
        browser.sleep(2000);
    });

    it("Validate Open Account",function () {

        element(by.ngClick("openAccount()")).click();
        mySelect.selectByText("Harry Potter");
        CurrencySelect.selectByText("Dollar");
        element(by.buttonText("Process")).click();
        browser.sleep(2000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function (value) {
            console.log(value);
        });

        alertDialog.accept();
        browser.sleep(2000);
    });

    it("Validate Customer Existance",function () {

        element(by.ngClick("showCust()")).click();
        element(by.model("searchCustomer")).sendKeys("Harry");


        var firstName = element(by.repeater("cust in Customers").row(0).column("cust.fName"));
        firstName.getText().then(function (value) {
            expect(value).toEqual("Harry");

            browser.sleep(2000);
        });
    });

});

