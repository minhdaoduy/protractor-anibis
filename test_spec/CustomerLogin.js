var SelectWrapper = require("../util/select-wrapper.js")
var mySelect = new SelectWrapper(by.id("userSelect"));

describe("Automation Customer Login functionality",function () {

    it("Login to the account",function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");

        element(by.buttonText("Customer Login")).click();

        mySelect.selectByText("Harry Potter");

        element(by.buttonText("Login")).click();

    });

    it("Validation Deposit",function () {

        element(by.buttonText("Deposit")).click();

        element(by.model("amount")).sendKeys('1000');
        element(by.css(".btn.btn-default")).click();

        element(by.binding('message')).getText().then(function (value) {
           console.log(value);
        });

        expect(element(by.binding("message")).getText()).toEqual("Deposit Successful");
    });

    it("Validation Withdrawl",function () {

        element(by.buttonText("Withdrawl")).click();

        element(by.model("amount")).sendKeys('1000');
        element(by.css(".btn.btn-default")).click();

        element(by.binding('message')).getText().then(function (value) {
            console.log(value);
        });

        expect(element(by.binding("message")).getText()).toEqual("Transaction Successful");
    });

});

