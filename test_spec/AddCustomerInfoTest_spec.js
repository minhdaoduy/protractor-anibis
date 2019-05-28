var base = require('../pages/BasePage.js');

describe("Customer Infomation Test",function () {

    var add_customer = require('../pages/AddCustomerDetail.js');
    // it("Adding Customer Information",function () {
    //
    //     add_customer.gotoAddCustomer();
    //     add_customer.addCustomerInfo("Ramna","Arora","110095");
    //
    // });

    // var add_customer = require('../pages/AddCustomerDetail.js');
    it("Open Account",function () {

        add_customer.gotoOpenAccount();
        add_customer.openAccount("Harry Potter","Dollar");

    });

    it("Search Customer",function () {

        add_customer.gotoSearchCustomer();
        add_customer.validateCustomerRecords("Harry");

    });


});
