var SelectWrapper = require("../util/select-wrapper.js");
var mySelect = new SelectWrapper(by.id("userSelect"));
var CurrencySelect = new SelectWrapper(by.id("currency"));
var locator = require("../util/customlocators.js");
var OR = require('../Datadriven/json/OR.json');
var until = protractor.ExpectedConditions;

var AddCustomerDetail = function () {

    this.gotoAddCustomer = function () {

        element(by.ngClick(OR.locators.addcustomerdetailspage.addcustomerbutton)).click();
        return this;

    };

    this.gotoOpenAccount = function () {

        element(by.ngClick(OR.locators.addcustomerdetailspage.openAccount)).click();

    };

    this.gotoSearchCustomer = function () {

        element(by.ngClick(OR.locators.addcustomerdetailspage.searchCustomer)).click();

    };

    this.addCustomerInfo = function (fname,lname,postcode) {

        browser.wait(until.presenceOf(element(by.model(OR.locators.addcustomerdetailspage.fName))), 50000, 'Element taking too long to appear in the DOM');

        element(by.model(OR.locators.addcustomerdetailspage.fName)).sendKeys(fname);
        element(by.model(OR.locators.addcustomerdetailspage.lName)).sendKeys(lname);
        element(by.model(OR.locators.addcustomerdetailspage.pCode)).sendKeys(postcode);



        element(by.css(OR.locators.addcustomerdetailspage.addcustomer)).click();

        browser.sleep(2000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function (value) {
            console.log(value);
        });

        alertDialog.accept();
        browser.sleep(2000);
    };

    this.openAccount = function (customer1,currency) {



        // mySelect.selectByText(customer1);
        // mySelect.selectByText("Harry Potter");
        mySelect.selectByValue("1");
        // mySelect.selectByPartialText("Hermoine");
        CurrencySelect.selectByPartialText(currency);
        element(by.buttonText("Process")).click();
        browser.sleep(2000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function (value) {
            console.log(value);
        });

        alertDialog.accept();
        browser.sleep(2000);

    };

    this.validateCustomerRecords = function (cus_name) {

        element(by.model("searchCustomer")).sendKeys(cus_name);


        var firstName = element(by.repeater("cust in Customers").row(0).column("cust.fName"));
        firstName.getText().then(function (value) {
            expect(value).toEqual("Harry");

            browser.sleep(2000);
        });

    };



};
module.exports = new AddCustomerDetail();